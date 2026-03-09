import React from 'react'

const heatmapValues = {
  "Time": ["9:00", "10:00", "11:00", "12:00", "13:00"],
  "Days": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${heatmapValues.Days.length + 1}, minmax(0, 1fr))` }}
    >
      {heatmapValues.data.map((floatRow, n) => (
        // Use a Fragment to group the header + dots without adding extra DOM elements
        <React.Fragment key={n}>
          <div className="text-2xl font-bold text-center content-center">{heatmapValues.Time[n]}</div>
          {floatRow.map((float, i) => (
            <GradientDot key={i} float={float} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
const GradientDot = ({ float }) => {
  const lightness = 90 - Math.floor(float * 10) * 8;
  return (
    <div
      className="aspect-square rounded-xl"
      style={{ backgroundColor: `hsl(270, 70%, ${lightness}%)` }}
    />
  );
};

export default Timetable