
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

const Timetable = () => {
  return (
    <div
      style={{ 
        fontFamily: 'Inter, sans-serif',
        padding: '1rem',
        height: '100%',
        boxSizing: 'border-box',
      }}
      >
      <div
        style={{ 
          display: 'grid',
          gridTemplateColumns: `auto repeat(${heatmapValues.days.length}, 1fr)`,
          gridTemplateRows: `auto repeat(${heatmapValues.time.length}, 1fr)`,
          gap: '0.5rem',
          height: '100%',
        }}
      >

        {/* Day headers */}
          <div /> {/* empty corner */}
          {heatmapValues.days.map((day) => (
            <div
              key={day}
              style={{ 
                textAlign: 'center',
                fontSize: '0.875rem', 
                fontWeight: 500 
              }}
              className="text-gray-500"
            >
              {day}
            </div>
          ))}

        {/* Rows -- Time intervals, time block elements */}
        {heatmapValues.data.map((floatRow, n) => (
          <React.Fragment key={n}>
            <div className="font-bold text-center content-center"
              style={{ 
                fontSize: '0.875rem',
              }}
              >
              {heatmapValues.time[n]}
            </div>

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
      style={{
        backgroundColor: `hsl(270, 70%, ${lightness}%)`,
        aspectRatio: '1 / 1',
        borderRadius: '20%',
        minWidth: '0.5rem',
        minHeight: '0.5rem',
      }}
    />
  );
};

export default Timetable
