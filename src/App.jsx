import { useState, useEffect } from 'react'
import CompanyList from './components/CompanyList'
import Dashboard from './components/Dashboard'
import { parseCSVData } from './utils/csvParser'

function App() {
  const [companies, setCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Try to load the actual CSV file first
        try {
          const response = await fetch('/dump.csv')
          if (response.ok) {
            const csvText = await response.text()
            const parsedData = parseCSVData(csvText)
            setCompanies(parsedData)
          } else {
            throw new Error('CSV file not found')
          }
        } catch (csvError) {
          console.warn('Could not load CSV file, using sample data:', csvError.message)
          // Fallback to sample data
          const sampleData = await import('./data/sampleData')
          setCompanies(sampleData.default)
        }
      } catch (err) {
        setError('Failed to load company data')
        console.error('Error loading data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading company data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        <CompanyList 
          companies={companies}
          selectedCompany={selectedCompany}
          onSelectCompany={setSelectedCompany}
        />
        <Dashboard selectedCompany={selectedCompany} />
      </div>
    </div>
  )
}

export default App