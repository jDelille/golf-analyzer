import React from "react";

type LeftArrowProps = {
  size: number;
  color: string;
};

const LeftArrow: React.FC<LeftArrowProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 6L9 12L15 18" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default LeftArrow;
