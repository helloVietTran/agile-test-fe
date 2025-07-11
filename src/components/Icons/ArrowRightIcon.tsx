import React from 'react';

type ArrowRightIconProps = {
  style?: React.CSSProperties;
};

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ style }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      style={style}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
        .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
        8.5H1.5A.5.5 0 0 1 1 8z"
      ></path>
    </svg>
  );
};

export default ArrowRightIcon;
