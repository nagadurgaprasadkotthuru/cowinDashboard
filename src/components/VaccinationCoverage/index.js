// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {CoverageList} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="heading">Vaccination Coverage</h1>
      <BarChart
        data={CoverageList}
        margin={{
          top: 5,
        }}
        width={1000}
        height={300}
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
    </div>
  )
}

export default VaccinationCoverage
