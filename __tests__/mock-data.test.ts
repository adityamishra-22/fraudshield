import {
  fraudTrendData,
  fraudTypeData,
  fraudSourceData,
  recentFraudIncidents,
  verificationHistory,
  verificationSuccessData,
  userStatusData,
} from '@/lib/mock-data'

describe('mock-data', () => {
  it('fraudTrendData has required fields', () => {
    expect(fraudTrendData.length).toBeGreaterThan(0)
    fraudTrendData.forEach(d => {
      expect(d).toHaveProperty('day')
      expect(d).toHaveProperty('ivt')
      expect(d).toHaveProperty('valid')
    })
  })

  it('fraudTypeData values are positive numbers', () => {
    fraudTypeData.forEach(d => {
      expect(d.count).toBeGreaterThan(0)
    })
  })

  it('fraudSourceData percentages sum to 100', () => {
    const total = fraudSourceData.reduce((sum, d) => sum + d.value, 0)
    expect(total).toBe(100)
  })

  it('userStatusData percentages sum to 100', () => {
    const total = userStatusData.reduce((sum, d) => sum + d.value, 0)
    expect(total).toBe(100)
  })

  it('recentFraudIncidents have required fields', () => {
    recentFraudIncidents.forEach(r => {
      expect(r).toHaveProperty('timestamp')
      expect(r).toHaveProperty('campaignId')
      expect(r).toHaveProperty('action')
      expect(['Blocked', 'Flagged']).toContain(r.action)
    })
  })

  it('verificationHistory statuses are valid', () => {
    const validStatuses = ['Verified', 'Pending', 'Failed']
    verificationHistory.forEach(r => {
      expect(validStatuses).toContain(r.status)
    })
  })

  it('verificationSuccessData rates are between 0 and 100', () => {
    verificationSuccessData.forEach(d => {
      expect(d.rate).toBeGreaterThanOrEqual(0)
      expect(d.rate).toBeLessThanOrEqual(100)
    })
  })
})
