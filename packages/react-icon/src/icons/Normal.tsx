import React, { FC, SVGProps } from 'react';

const Normal: FC<SVGProps<SVGSVGElement>> = ({
  width = '24',
  height = '24',
  viewBox = '0 0 16 16',
  fill = '#333',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    {...props}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M1 3c0-.552.448-1 1-1h3.6c.397 0 .757.235.916.598L7.131 4H14c.552 0 1 .448 1 1v8c0 .552-.448 1-1 1H2c-.552 0-1-.448-1-1V3z"
    />
  </svg>
);

export default Normal;
