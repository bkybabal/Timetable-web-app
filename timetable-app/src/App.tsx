
import React from 'react'
import './App.css'

interface HeatmapValues {
  time: string[];
  days: string[];
  data: number[][];
}

const heatmapValues: HeatmapValues = {
  "time": ["9:00", "10:00", "11:00", "12:00", "13:00"],
  "days": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "data": [
    [0.24, 0.67, 0.32, 0.21, 0.64, 0.27],
    [0.64, 0.27, 0.21, 0.67, 0.24, 0.32],
    [0.32, 0.64, 0.27, 0.24, 0.67, 0.21],
    [0.21, 0.32, 0.67, 0.64, 0.27, 0.24],
    [0.67, 0.24, 0.21, 0.32, 0.64, 0.27],
  ]
};

const App = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${heatmapValues.days.length + 1}, minmax(0, 1fr))` }}
      >
        {heatmapValues.data.map((floatRow, n) => (
          <React.Fragment key={n}>
            <div className="text-2xl font-bold text-center content-center">{heatmapValues.time[n]}</div>
            {floatRow.map((float, i) => (
              <GradientDot key={i} float={float} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )  
}
const GradientDot = ({float}: { float: number }) => {
  const lightness = 90 - Math.round(Math.min(Math.max(float, 0), 1) * 64);
  return (
    <div 
      aria-label={`Value: ${float.toFixed(2)}`}
      className="aspect-square rounded-xl"
      style={{ backgroundColor: `hsl(270, 70%, ${lightness}%)` }}
    />
  );
};

export default App
