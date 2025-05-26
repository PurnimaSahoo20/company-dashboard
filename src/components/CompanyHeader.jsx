import { formatCurrency } from '../utils/formatters'

function CompanyHeader({ company }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{company.name}</h2>
          <p className="text-gray-600 mt-1">
            {company.industry} • {company.location}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 text-right">
          <p className="text-2xl font-bold text-green-600">{formatCurrency(company.revenue)}</p>
          <p className="text-gray-600">Annual Revenue</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Employees</p>
          <p className="text-2xl font-bold text-gray-900">{company.employees}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Founded</p>
          <p className="text-2xl font-bold text-gray-900">{company.founded}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Industry</p>
          <p className="text-lg font-bold text-gray-900">{company.industry}</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyHeader