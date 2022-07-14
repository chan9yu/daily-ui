import React, { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ColorThemeType, SizeType } from '../../typings/props.types';

type ButtonThemeType = {
  gray: 'gray';
  white: 'white';
} & ColorThemeType;
type ButtonSizeType = Pick<SizeType, 'sm' | 'base' | 'lg'>;
type ButtonRadiusType = { xxl: 'xxl' } & Omit<SizeType, 'xs'>;
type ButtonHTMLType = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<ButtonHTMLType, 'type'> {
  animation?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullSize?: boolean;
  htmlType?: ButtonHTMLType['type'];
  radius?: keyof ButtonRadiusType;
  outline?: boolean;
  size?: keyof ButtonSizeType;
  style?: CSSProperties;
  type?: keyof ButtonThemeType;
}

const BASE = 'rsup-btn' as const;

const Button: FC<ButtonProps> = ({
  animation = false,
  children,
  className = '',
  disabled = false,
  fullSize = false,
  htmlType,
  radius = 'sm',
  outline = false,
  size = 'base',
  style,
  type = 'primary',
  ...props
}) => {
  const cx = classNames(
    BASE,
    `${BASE}--border-radius-${radius}`,
    `${BASE}--size-${size}`,
    `${BASE}--type-${type}-${outline && type !== 'white' ? 'outline' : 'fill'}`,
    { [`${BASE}--animation`]: animation },
    { [`${BASE}--disabled`]: disabled },
    { [`${BASE}--full-size`]: fullSize },
  );

  return (
    <button
      className={`${cx} ${className}`}
      disabled={disabled}
      type={htmlType}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
