import React, { FC, SVGProps } from 'react';

const Icon: FC<SVGProps<SVGSVGElement>> = ({
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
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
      d="M11 6c2.761 0 5 2.239 5 5 0 1.078-.341 2.077-.922 2.894.058.033.111.075.16.124l2.51 2.51c.336.336.336.882 0 1.22-.338.336-.884.336-1.22 0l-2.51-2.51c-.049-.049-.09-.102-.126-.16-.815.58-1.814.922-2.892.922-2.761 0-5-2.239-5-5s2.239-5 5-5zm0 1.667c-1.84 0-3.333 1.492-3.333 3.333 0 1.84 1.492 3.333 3.333 3.333 1.84 0 3.333-1.492 3.333-3.333 0-1.84-1.492-3.333-3.333-3.333z"
    />
  </svg>
);

export default Icon;
