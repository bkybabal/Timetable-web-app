

import {type ChartProps} from './types'
import './styles.css'

export const Timeline = ({entries, timeframe}: ChartProps) => {

  const timespan = timeframe.end - timeframe.begin

  const relNormalise = ( a:number, b:number ): number => {
    return ( ( b - a ) / timespan ) * 100
  }

  return (
    <div className="flex min-h-8 relative items-center bg-gray-600">
      {entries.map((entry) => (
        <div
          className={`absolute rounded h-full ${entry.appearance}`}
          style={{
            width: `${relNormalise(entry.timeframe.begin, entry.timeframe.end)}%`,
            left: `${relNormalise(timeframe.begin, entry.timeframe.begin)}%`,
          }}>  
        </div>
      ))}
    </div>
  )
}
