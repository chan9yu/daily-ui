import React, { FC, SVGProps } from 'react';

const Lock: FC<SVGProps<SVGSVGElement>> = ({
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
    <g fill="none" fillRule="evenodd">
      <path
        d="M7.1 2.4h-.2c-1.2 0-2.2 1-2.2 2.3v2.6h4.7V4.7c0-1.3-1-2.3-2.3-2.3z"
        transform="translate(5 2)"
      />
      <path
        fill={fill}
        fillRule="nonzero"
        d="M12.3 7.3h-.9V4.7C11.4 2.4 9.5.4 7.2.4H7C4.7.4 2.8 2.3 2.8 4.7v2.6H1.7C.9 7.3.3 7.9.3 8.7v9.1c0 .8.6 1.4 1.4 1.4h10.6c.8 0 1.4-.6 1.4-1.4V8.7c0-.8-.7-1.4-1.4-1.4zM7 14.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c0 .9-.7 1.5-1.5 1.5zm2.4-7.4H4.6V4.7c0-1.2 1-2.3 2.2-2.3H7c1.2 0 2.2 1 2.2 2.3v2.6h.2z"
        transform="translate(5 2)"
      />
    </g>
  </svg>
);

export default Lock;
