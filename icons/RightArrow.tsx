import React from "react";

type RightArrowProps = {
  size: number;
  color: string;
};

const RightArrow: React.FC<RightArrowProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 6L15 12L9 18" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default RightArrow;
