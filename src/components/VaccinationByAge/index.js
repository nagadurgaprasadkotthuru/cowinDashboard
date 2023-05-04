import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const colorsList = ['#2d87bb', '#a3df9f', '#64c2a6']

const VaccinationByAge = props => {
  const {byAgeList} = props
  return (
    <div className="vaccination-by-age-container">
      <h1 className="heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={byAgeList}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="80%"
          dataKey="count"
        >
          {byAgeList.map((eachItem, index) => (
            <Cell
              name={eachItem.age}
              fill={colorsList[index]}
              key={eachItem.count}
            />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
