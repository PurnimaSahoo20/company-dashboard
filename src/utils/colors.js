const industryColors = {
  Technology: "#3B82F6",      // Blue
  Energy: "#10B981",          // Green
  Healthcare: "#EF4444",      // Red
  Finance: "#F59E0B",         // Yellow
  Education: "#8B5CF6",       // Purple
  Manufacturing: "#6366F1",   // Indigo
  Retail: "#EC4899",          // Pink
  Consulting: "#14B8A6",      // Teal
  Media: "#F97316",           // Orange
  Transportation: "#84CC16",   // Lime
  Real_Estate: "#06B6D4",     // Cyan
  Food: "#EAB308",            // Amber
  Entertainment: "#A855F7",   // Violet
  Agriculture: "#22C55E",     // Green
  Construction: "#F97316",    // Orange
  Telecommunications: "#3B82F6", // Blue
  Automotive: "#6B7280",      // Gray
  Aerospace: "#1E40AF",       // Blue
  Pharmaceutical: "#DC2626",  // Red
  Insurance: "#059669"        // Emerald
}

export const getIndustryColor = (industry) => {
  // Handle industry names with spaces or special characters
  const normalizedIndustry = industry?.replace(/\s+/g, '_') || 'Technology'
  return industryColors[normalizedIndustry] || industryColors[industry] || "#6B7280"
}

export const getAllIndustryColors = () => {
  return industryColors
}

export default industryColors