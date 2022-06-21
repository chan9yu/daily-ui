import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import '@rsup/styles/build/button.css';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  block: boolean;
  disabled: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  type: 'primary' | 'default' | 'dashed' | 'text';
  size: 'large' | 'middle' | 'small';
  viewMode: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  block = false,
  disabled = false,
  htmlType,
  type = 'default',
  size = 'large',
  viewMode = false,
  ...props
}) => {
  const base = 'rsup-button__container';
  const className = classNames(
    base,
    { [`${base}--block`]: block },
    `${base}--type-${type}`,
    `${base}--size-${size}`,
  );

  return (
    <button className={className} disabled={disabled} type={htmlType} {...props}>
      {children}
    </button>
  );
};

export default Button;
