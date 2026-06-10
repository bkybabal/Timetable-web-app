
// ─── Crayon ───────────────────────────────────────────────────────────────

export type Appearance = "online" | "offline" | "serverDown" | "trackerDown"

type Timeframe = {
  begin: number
  end: number
}

type EntryProps = {
  timeframe: Timeframe
  appearance: Appearance
  label: string
}

export type ChartProps = {
  entries: EntryProps[]
  timeframe: Timeframe
}