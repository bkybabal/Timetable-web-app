export interface UptimeEntry {
  name: string;
  start_timestamp: number; // epoch ms
  end_timestamp: number | null; // null = still active
}

export interface GanttChartProps {
  entries: UptimeEntry[];
  startTime: number;
  endTime: number | null;
}
