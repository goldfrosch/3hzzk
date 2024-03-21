import { vars } from "../styles";

type IconProps = {
  color?: string;
  size?: number;
};

const Hamburger = ({ color, size = 36 }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g clipPath="url(#clip0_429_11066)">
          <path
            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
            stroke={color ?? vars.color.gray[0]}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_429_11066">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.000915527)"
            ></rect>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};

export default Hamburger;
