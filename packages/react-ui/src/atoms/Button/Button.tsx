import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ColorThemeType, SizeType } from '../../typings/props.types';

type ButtonThemeType = {
  default: 'default';
  gray: 'gray';
  text: 'text';
} & ColorThemeType;
type ButtonSizeType = Pick<SizeType, 'sm' | 'base' | 'lg'>;
type ButtonHTMLType = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<ButtonHTMLType, 'type'> {
  className?: string;
  children: ReactNode;
  fullSize?: boolean;
  htmlType?: ButtonHTMLType['type'];
  type?: keyof ButtonThemeType;
  size?: keyof ButtonSizeType;
  viewMode?: boolean;
}

const Button: FC<ButtonProps> = ({
  className = '',
  children,
  fullSize = false,
  htmlType,
  type = 'primary',
  size = 'base',
  viewMode = false,
  ...props
}) => {
  const base = 'rsup-btn';
  const cx = classNames(
    base,
    `${base}--type-${type}`,
    `${base}--size-${size}`,
    { [`${base}--full-size`]: fullSize },
    { [`${base}--view-mode`]: viewMode },
  );

  return viewMode ? (
    <button className={`${base}__view-mode`} {...props}>
      {children}
    </button>
  ) : (
    <button className={`${cx} ${className}`} type={htmlType} {...props}>
      {children}
    </button>
  );
};

export default Button;
