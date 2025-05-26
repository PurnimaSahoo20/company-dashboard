import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '../utils/formatters'
import { getIndustryColor } from '../utils/colors'

function RevenueChart({ company }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Revenue Trend</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={company.monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
            <Tooltip
              formatter={(value) => [formatCurrency(value), "Revenue"]}
              labelStyle={{ color: "#374151" }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={getIndustryColor(company.industry)}
              strokeWidth={3}
              dot={{ fill: getIndustryColor(company.industry), strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart