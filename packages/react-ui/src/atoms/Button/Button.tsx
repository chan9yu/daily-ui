import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  fullSize?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'default' | 'dashed' | 'text';
  size?: 'large' | 'middle' | 'small';
  viewMode?: boolean;
}

const Button: FC<ButtonProps> = ({
  className = '',
  children,
  disabled = false,
  fullSize = false,
  htmlType,
  type = 'default',
  size = 'large',
  viewMode = false,
  ...props
}) => {
  const base = 'rsup-btn';
  const cx = classNames(
    base,
    { [`${base}--disabled`]: disabled },
    { [`${base}--full-size`]: fullSize },
    `${base}--type-${type}`,
    `${base}--size-${size}`,
  );

  return viewMode ? (
    <button className={`${base}--view-mode`} {...props}>
      {children}
    </button>
  ) : (
    <button className={`${cx} ${className}`} disabled={disabled} type={htmlType} {...props}>
      {children}
    </button>
  );
};

export default Button;
