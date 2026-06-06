import { UptimeGanttChart } from "./UptimeGanttChart/UptimeGanttChart";

const now = Date.now();

const oneHour = 60 * 60 * 1000;

const entries = [
  {
    name: "API Server",
    start_timestamp: now - oneHour * 22,
    end_timestamp: now - oneHour * 18,
  },
  {
    name: "Database",
    start_timestamp: now - oneHour * 16,
    end_timestamp: now - oneHour * 9,
  },
  {
    name: "Auth Service",
    start_timestamp: now - oneHour * 12,
    end_timestamp: null,
  },
  {
    name: "Redis",
    start_timestamp: now - oneHour * 6,
    end_timestamp: null,
  },
  {
    name: "Worker-01",
    start_timestamp: now - oneHour * 20,
    end_timestamp: now - oneHour * 4,
  },
  {
    name: "Worker-02",
    start_timestamp: now - oneHour * 8,
    end_timestamp: now - oneHour * 2,
  },
];

export default function App() {
  return (
    <div className="">
      <UptimeGanttChart
        entries={entries}
        startTime={now - oneHour * 24}
        endTime={null}
      />
    </div>
  );
}
