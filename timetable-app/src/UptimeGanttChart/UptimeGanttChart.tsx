import React, { useMemo, useState } from "react";
import { type GanttChartProps, type UptimeEntry } from "./types";
import { clamp, formatTimestamp } from "./timeUtils";
import { GanttTooltip } from "./GanttTooltip";

export const UptimeGanttChart: React.FC<GanttChartProps> = ({
  entries,
  startTime,
  endTime,
}) => {
  return (
    <div className="flex h-64 bg-gray-600" style={{width: '50%'}}>
      <div 
        className="flex relative bg-red-500 h-64"
        style={{
          width: '30%',
          left: '10%'
        }}
        >
      </div>
      <div 
        className="flex relative bg-blue-500 h-64"
        style={{
          width: '30%',
          left: '20%'
        }}
        >
      </div>
    </div>
  )
}
