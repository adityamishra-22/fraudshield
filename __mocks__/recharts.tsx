import React from 'react'

const mock = (name: string) => {
  const C = ({ children }: { children?: React.ReactNode }) => (
    <div data-testid={name}>{children}</div>
  )
  C.displayName = name
  return C
}

export const LineChart = mock('LineChart')
export const BarChart = mock('BarChart')
export const PieChart = mock('PieChart')
export const Line = mock('Line')
export const Bar = mock('Bar')
export const Pie = mock('Pie')
export const Cell = mock('Cell')
export const XAxis = mock('XAxis')
export const YAxis = mock('YAxis')
export const CartesianGrid = mock('CartesianGrid')
export const Tooltip = mock('Tooltip')
export const Legend = mock('Legend')
export const ResponsiveContainer = ({ children }: { children?: React.ReactNode }) => (
  <div data-testid="ResponsiveContainer">{children}</div>
)
