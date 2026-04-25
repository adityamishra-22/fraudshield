export const fraudTrendData = [
  { day: 'Oct 1', ivt: 12, valid: 88 },
  { day: 'Oct 3', ivt: 18, valid: 82 },
  { day: 'Oct 5', ivt: 8, valid: 92 },
  { day: 'Oct 7', ivt: 22, valid: 78 },
  { day: 'Oct 9', ivt: 15, valid: 85 },
  { day: 'Oct 11', ivt: 30, valid: 70 },
  { day: 'Oct 13', ivt: 25, valid: 75 },
  { day: 'Oct 15', ivt: 10, valid: 90 },
  { day: 'Oct 17', ivt: 35, valid: 65 },
  { day: 'Oct 19', ivt: 20, valid: 80 },
  { day: 'Oct 21', ivt: 28, valid: 72 },
  { day: 'Oct 23', ivt: 14, valid: 86 },
  { day: 'Oct 25', ivt: 19, valid: 81 },
]

export const fraudTypeData = [
  { type: 'Bots', count: 35000 },
  { type: 'Click Farm', count: 28000 },
  { type: 'Geo', count: 18000 },
  { type: 'Data Center', count: 14000 },
  { type: 'Hidden Ads', count: 9000 },
]

export const fraudSourceData = [
  { name: 'Source A', value: 28, color: '#4f8ef7' },
  { name: 'Source B', value: 24, color: '#ff4c4c' },
  { name: 'Source C', value: 19, color: '#00c48c' },
  { name: 'Source D', value: 16, color: '#ff9f43' },
  { name: 'Source E', value: 13, color: '#a78bfa' },
]


export const recentFraudIncidents = [
  { timestamp: 'Oct 25 11:32:01', campaignId: 'C_7812', eventId: 'E_98234', sourceId: 'S_451 (DSP X)', trafficType: 'Click', fraudReason: 'High IVT', location: 'NY, USA', ip: '192.0.2.14', action: 'Blocked' },
  { timestamp: 'Oct 25 11:32:01', campaignId: 'C_7812', eventId: 'E_88234', sourceId: 'S_451 (DSP X)', trafficType: 'Click', fraudReason: 'High IVT', location: 'NY, USA', ip: '192.0.2.14', action: 'Blocked' },
  { timestamp: 'Oct 25 11:32:01', campaignId: 'C_7812', eventId: 'E_78234', sourceId: 'S_451 (DSP X)', trafficType: 'Click', fraudReason: 'Bot Traffic', location: 'TX, USA', ip: '10.0.0.45', action: 'Blocked' },
  { timestamp: 'Oct 25 11:32:01', campaignId: 'C_7812', eventId: 'E_99234', sourceId: 'S_451 (DSP X)', trafficType: 'Click', fraudReason: 'High IVT', location: 'NY, USA', ip: '192.0.2.14', action: 'Blocked' },
  { timestamp: 'Oct 25 11:32:01', campaignId: 'C_7812', eventId: 'E_88234', sourceId: 'S_451 (DSP X)', trafficType: 'Click', fraudReason: 'Click Farm', location: 'CN, Asia', ip: '58.14.0.22', action: 'Flagged' },
  { timestamp: 'Oct 25 11:31:55', campaignId: 'C_4521', eventId: 'E_11002', sourceId: 'S_782 (DSP Y)', trafficType: 'View', fraudReason: 'Geo Fraud', location: 'BR, SA', ip: '177.0.3.99', action: 'Blocked' },
]

export const verificationHistory = [
  { date: '2023-10-27', userId: '+1 (555) 123-4567', type: 'Phone & ID', status: 'Pending' },
  { date: '2023-10-27', userId: '+1 (555) 123-4567', type: 'Phone & ID', status: 'Pending' },
  { date: '2023-10-26', userId: 'user_4821@mail.com', type: 'Email & ID', status: 'Verified' },
  { date: '2023-10-26', userId: '+44 7700 900123', type: 'Phone Only', status: 'Failed' },
  { date: '2023-10-25', userId: 'user_7734@mail.com', type: 'ID Only', status: 'Verified' },
  { date: '2023-10-25', userId: '+91 98765 43210', type: 'Phone & ID', status: 'Verified' },
]

export const verificationSuccessData = [
  { day: '10', rate: 72 },
  { day: '20', rate: 65 },
  { day: '30', rate: 80 },
  { day: '40', rate: 55 },
  { day: '50', rate: 75 },
  { day: '60', rate: 85 },
  { day: '70', rate: 78 },
  { day: '80', rate: 90 },
  { day: '90', rate: 88 },
  { day: '100', rate: 92 },
]

export const userStatusData = [
  { name: 'Verified', value: 58, color: '#00c48c' },
  { name: 'Pending', value: 28, color: '#ff9f43' },
  { name: 'Failed', value: 14, color: '#ff4c4c' },
]
