import { Timeline } from "./TimelineChart/Timeline";
import { sampleChartProps } from './TimelineChart/sampleProps'


export default function App() {
  



  return (
    <div style={{padding: 20}}>
      <Timeline {...sampleChartProps} />
    </div>
  );
}
