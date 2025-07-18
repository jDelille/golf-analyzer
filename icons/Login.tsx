import React from "react";

type LoginProps = {
  size: number;
  color: string;
};

const Login: React.FC<LoginProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path
          d="M16.6325 6.54415L10.3162 4.43874C9.6687 4.2229 9 4.70487 9 5.38743V18.6126C9 19.2951 9.66869 19.7771 10.3162 19.5613L16.6325 17.4558C17.4491 17.1836 18 16.4193 18 15.5585V8.44152C18 7.58066 17.4491 6.81638 16.6325 6.54415Z"
          fill={color}
          fillOpacity="0.25"
        />
        <path
          d="M11.5 9.5L14 12M14 12L11.5 14.5M14 12H4"
          stroke={color}
          strokeLinecap="round"
        />
    </svg>
  );
};

export default Login;
