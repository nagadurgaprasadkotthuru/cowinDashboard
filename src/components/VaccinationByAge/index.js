import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const colorsList = ['#2d87bb', '#a3df9f', '#64c2a6']

const VaccinationByAge = props => {
  const {byAgeList} = props
  return (
    <div className="vaccination-by-age-container">
      <h1 className="heading">Vaccination by Age</h1>
      <ResponsiveContainer
        width="100%"
        height={200}
        className="vaccination-by-age-container1"
      >
        <PieChart className="pie-char-container">
          <Pie
            cx="70%"
            cy="40%"
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
            layout="vertical"
            verticalAlign="middle"
            align="bottom"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
