import React from "react";

export const LongTailRightArrow: React.FC<{
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
}> = ({ width = 220, height = 40, className, title = "Right arrow with long tail" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 40"
    width={width}
    height={height}
    className={className}
    role="img"
    aria-label={title}
  >
    <title>{title}</title>
    <line x1="8" y1="20" x2="160" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="8" y1="14" x2="8" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    <polygon points="160,10 200,20 160,30" fill="currentColor" />
  </svg>
);

export default LongTailRightArrow;
