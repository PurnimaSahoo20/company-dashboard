import Papa from 'papaparse'

export const parseCSVData = (csvText) => {
  try {
    const result = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) =>
        header.toLowerCase().trim().replace(/\s+/g, '_'),
      transform: (value) => value?.toString().trim() || ''
    })

    if (result.errors.length > 0) {
      console.warn('CSV parsing errors:', result.errors)
    }

    const rows = result.data.slice(0, 100) // Limit to 100 records

    const transformedData = rows.map((row, index) => {
      const revenue = parseFloat(row.closing_index_value) || generateRandomRevenue()
      const employees = generateRandomEmployees()
      return {
        id: index + 1,
        name: row.index_name || `Company ${index + 1}`,
        industry: 'Finance',
        revenue,
        employees,
        founded: generateRandomYear(),
        location: row.index_date || 'Unknown',
        monthlyData: generateMonthlyData(revenue, employees)
      }
    })

    return transformedData

  } catch (error) {
    console.error('❌ Error parsing CSV:', error)
    throw new Error('Failed to parse CSV data')
  }
}

// Fake value generators
const generateRandomRevenue = () =>
  Math.floor(Math.random() * 2000000) + 500000

const generateRandomEmployees = () =>
  Math.floor(Math.random() * 300) + 50

const generateRandomYear = () =>
  2010 + Math.floor(Math.random() * 14)

const generateMonthlyData = (annualRevenue, totalEmployees) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const monthlyRevenue = annualRevenue / 12
  const baseEmployees = Math.max(totalEmployees - 10, Math.floor(totalEmployees * 0.9))

  return months.map((month, index) => {
    const revenueGrowth = 0.8 + index * 0.04 + Math.random() * 0.2
    const employeeGrowth = Math.floor(index * 1.5) + Math.floor(Math.random() * 3)

    return {
      month,
      revenue: Math.floor(monthlyRevenue * revenueGrowth),
      employees: Math.min(baseEmployees + employeeGrowth, totalEmployees)
    }
  })
}
