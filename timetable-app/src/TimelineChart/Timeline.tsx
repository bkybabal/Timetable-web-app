
interface AppearanceType {
  rgba: [number, number, number, number]
  pattern: "full" | "striped"
}

const Appearances: { [key: string]: AppearanceType } = {
  online: {rgba: [0,220,0,0.2], pattern: "full"},
  offline: {rgba: [0,160,180,0.2], pattern: "full"},
  serverDown: {rgba: [160,160,0,0.4], pattern: "striped"},
  trackerDown: {rgba: [160,0,160,0.4], pattern: "striped"},
}

type Appearance = keyof typeof Appearances

interface Timeframe {
  begin: number
  end: number
}

interface EntryProps {
  timeframe: Timeframe
  appearance: Appearance
  label: string
}

interface ChartProps {
  entries: [EntryProps]
  timeframe: Timeframe
}

const today: number = (Date.now() / 1000) % (24 * 60 * 60)

const sampleChartProps: ChartProps = {
  entries: [
    {timeframe: {begin: today, end: today + 4 * 60 * 60}, appearance: "online", label: ""},
  ],
  timeframe: {begin: today, end: today + 24 * 60 * 60}
}

export const Timeline = ({
  entries=sampleChartProps.entries,
  timeframe=sampleChartProps.timeframe,
}: ChartProps) => {
  const timespan = timeframe.end - timeframe.begin

  const relNormalise = ( a:number, b:number ): number => {
    return ( ( b - a ) / timespan ) * 100
  }
  return (
    <div className="flex h-64 bg-gray-600" style={{width: '50%'}}>
      {entries.map((entry) => (
        <div
          className="flex absolute h-64"
          style={{
            width: `${relNormalise(entry.timeframe.begin, entry.timeframe.end)}%`,
            left: `${relNormalise(timeframe.begin, entry.timeframe.begin)}%`,
            backgroundColor: 'rgba(0,255,0,0.4)'
          }}
          >
            
        </div>
      ))}
    </div>
  )
}
