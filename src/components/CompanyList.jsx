import { formatCurrency } from '../utils/formatters'

const industryColors = {
  Technology: "#3B82F6",
  Energy: "#10B981",
  Healthcare: "#EF4444",
  Finance: "#F59E0B",
  Education: "#8B5CF6",
  Manufacturing: "#6366F1",
  Retail: "#EC4899",
  Consulting: "#14B8A6",
  Media: "#F97316",
  Transportation: "#84CC16"
}

function CompanyList({ companies, selectedCompany, onSelectCompany }) {
  return (
    <div className="w-full lg:w-1/3 xl:w-1/4 bg-white shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Company Dashboard</h1>
        <p className="text-gray-600 mt-1">{companies.length} companies</p>
      </div>

      <div className="overflow-y-auto h-screen lg:h-[calc(100vh-120px)]">
        {companies.map((company) => (
          <div
            key={company.id}
            onClick={() => onSelectCompany(company)}
            className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedCompany?.id === company.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{company.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{company.industry}</p>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-xs text-gray-600">{formatCurrency(company.revenue)}</span>
                  <span className="text-xs text-gray-600">{company.employees} employees</span>
                </div>
              </div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: industryColors[company.industry] || "#6B7280" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyList