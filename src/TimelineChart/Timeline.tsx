

import {type ChartProps} from './types'
import './timeline.css'

export const Timeline = ({entries, timeframe}: ChartProps) => {

  const timespan = timeframe.end - timeframe.begin

  const relNormalise = ( a:number, b:number ): number => {
    return ( ( b - a ) / timespan ) * 100
  }

  return (
    <div className="flex min-h-8 relative items-center bg-zinc-900 hover:bg-zinc-800">
      {entries.map((entry) => (
        <div
          className={`absolute h-full ${entry.appearance}`}
          style={{
            width: `${relNormalise(entry.timeframe.begin, entry.timeframe.end)}%`,
            left: `${relNormalise(timeframe.begin, entry.timeframe.begin)}%`,
          }}>  
        </div>
      ))}
    </div>
  )
}
