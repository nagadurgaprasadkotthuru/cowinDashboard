// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {CoverageList} = props

  return (
    <>
      <h1 className="heading">Vaccination Coverage</h1>
      <ResponsiveContainer
        width={1000}
        height={300}
        className="responsive-container"
      >
        <BarChart
          data={CoverageList}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose 1" fill="#2d87bb" barSize="5%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="5%" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationCoverage
