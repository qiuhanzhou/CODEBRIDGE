import React, { Fragment, PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    year: 2010,
    China: 22,
    US: 79,
  },
  {
    year: 2011,
    China: 650,
    US: 177,
  },
  {
    year: 2012,
    China: 1880,
    US: 1054,
  },
  {
    year: 2013,
    China: 7157,
    US: 1972,
  },
  {
    year: 2014,
    China: 10229,
    US: 2241,
  },
  {
    year: 2015,
    China: 13927,
    US: 2093,
  },
  {
    year: 2016,
    China: 27270,
    US: 6464,
  },
  {
    year: 2017,
    China: 23753,
    US: 3335,
  },
  {
    year: 2018,
    China: 16412,
    US: 3416,
  },

  {
    year: 2019,
    China: 11681,
    US: 4143,
  },
  {
    year: 2020,
    China: 8856,
    US: 8965,
  },
  {
    year: 2021,
    China: 7073,
    US: 9174,
  },
  {
    year: 2022,
    China: 3120,
    US: 25848,
  },
  {
    year: 2023,
    China: 630,
    US: 25497,
  },
]

export default class SimpleLineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v'

  render() {
    return (
      <Fragment>
        <h2
          style={{
            color: 'grey',
            fontSize: '26px',
            alignSelf: 'flex-start',
            marginLeft: '20px',
          }}
        >
          Top Two Countries with the Largest Installed Solar Power Capacity By
          Year
        </h2>

        <ResponsiveContainer width='100%' aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='year'
              label={{
                value: 'Year ',
              }}
            />
            <YAxis
              label={{
                value: 'Total capacity',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='China'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='US' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </Fragment>
    )
  }
}
