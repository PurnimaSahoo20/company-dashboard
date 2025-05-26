import CompanyHeader from './CompanyHeader'
import RevenueChart from './RevenueChart'
import EmployeeChart from './EmployeeChart'

function Dashboard({ selectedCompany }) {
  if (!selectedCompany) {
    return (
      <div className="flex-1 p-6">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Select a Company</h3>
            <p className="text-gray-600 mt-1">Choose a company from the list to view its data and charts</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-6">
      <div className="space-y-6">
        <CompanyHeader company={selectedCompany} />
        <RevenueChart company={selectedCompany} />
        <EmployeeChart company={selectedCompany} />
      </div>
    </div>
  )
}

export default Dashboard