import { Timeline } from "./TimelineChart/Timeline";
import { sampleChartProps } from './TimelineChart/sampleProps'
import { type ApiResponse } from "./types";

const url = 'api.alyi.uk/sessions';
const res  = await fetch(url);
const json: ApiResponse = res.json();


export default function App() {
  
 
  json.sessions



  return (
    <div style={{padding: 20}}>
      <Timeline {...sampleChartProps} />
    </div>
  );
}
