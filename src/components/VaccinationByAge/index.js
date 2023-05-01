import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {byAgeList} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="100%"
          cy="0%"
          data={byAgeList}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="100%"
          dataKey="count"
        >
          {byAgeList.map(eachItem => (
            <Cell name={eachItem.age} fill="#fecba6" />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
