export const formatTimestamp = (epoch: number): string => {
  const d = new Date(epoch);

  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");

  const dd = String(d.getDate()).padStart(2, "0");
  const MM = String(d.getMonth() + 1).padStart(2, "0");

  return `${hh}:${mm}, ${dd}/${MM}`;
};

export const clamp = (
  value: number,
  min: number,
  max: number
): number => Math.min(Math.max(value, min), max);
