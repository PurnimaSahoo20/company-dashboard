export const formatCurrency = (value) => {
  if (value === null || value === undefined) return '$0'
  
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export const formatNumber = (value) => {
  if (value === null || value === undefined) return '0'
  
  return new Intl.NumberFormat("en-US").format(value)
}

export const formatCompactNumber = (value) => {
  if (value === null || value === undefined) return '0'
  
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value)
}