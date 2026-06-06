import React from "react";

interface Props {
  visible: boolean;
  x: number;
  y: number;
  content: React.ReactNode;
}

export const GanttTooltip: React.FC<Props> = ({
  visible,
  x,
  y,
  content,
}) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: x + 12,
        top: y + 12,
        pointerEvents: "none",
        background: "#1e1e1e",
        color: "white",
        padding: "8px 10px",
        borderRadius: 6,
        fontSize: 12,
        zIndex: 9999,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
      }}
    >
      {content}
    </div>
  );
};
