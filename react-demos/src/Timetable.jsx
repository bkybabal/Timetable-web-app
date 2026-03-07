const Timetable = () => {
  const data = [
    { Time: "15:00", Monday: 0.12, Tuesday: 0.87, Wednesday: 0.34, Thursday: 0.61, Friday: 0.29, Saturday: 0.74, Sunday: 0.45 },
    { Time: "16:00", Monday: 0.93, Tuesday: 0.42, Wednesday: 0.78, Thursday: 0.15, Friday: 0.66, Saturday: 0.31, Sunday: 0.89 },
    { Time: "17:00", Monday: 0.57, Tuesday: 0.23, Wednesday: 0.91, Thursday: 0.48, Friday: 0.82, Saturday: 0.07, Sunday: 0.63 },
    { Time: "18:00", Monday: 0.38, Tuesday: 0.76, Wednesday: 0.19, Thursday: 0.94, Friday: 0.53, Saturday: 0.67, Sunday: 0.22 },
  ];
  const headers = Object.keys(data[0]);

  return <table>
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr key={row.Time}>
          {Object.values(row).map(cell => 
            {if (typeof cell === "number") {
              return <td key={cell}>{lerpColorCircle(cell)}</td>
            } else {
              return <td key={cell}>{cell}</td>
            }
          })}
        </tr>
      ))}
    </tbody>
  </table>;
};

const lerpColorCircle = (float) => {
  const color = lerpColor("#ff5252", "#52ff60", float);
  return <div className="w-24 aspect-square rounded-full" style={{ backgroundColor: color }}></div>;
};

function lerpColor(colorA, colorB, t) {
  const a = parseInt(colorA.slice(1), 16);
  const b = parseInt(colorB.slice(1), 16);

  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;

  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);

  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, '0')}`;
}

export default Timetable;
