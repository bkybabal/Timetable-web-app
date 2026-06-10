import {type ChartProps} from './types'


const today: number = (Date.now() / 1000) % (24 * 60 * 60)

export const sampleChartProps: ChartProps = {
  entries: [
    {timeframe: {begin: today, end: today + 3.4 * 60 * 60}, appearance: "serverDown", label: ""},
    {timeframe: {begin: today + 22 * 60 * 60, end: today + 24 * 60 * 60}, appearance: "trackerDown", label: ""},
    {timeframe: {begin: today + 15 * 60 * 60, end: today + 19 * 60 * 60}, appearance: "online", label: ""}
  ],
  timeframe: {begin: today, end: today + 24 * 60 * 60}
}