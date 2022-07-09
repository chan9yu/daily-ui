import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { ColorThemeType, WeightType } from '../../typings/props.types';

type TitleColorType = {
  text: 'text';
  description: 'description';
  input: 'input';
  guide: 'guide';
  white: 'white';
} & ColorThemeType;
type TitleSizeType = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
  type?: keyof TitleColorType;
  size?: TitleSizeType;
  style?: CSSProperties;
  weight?: keyof WeightType;
}

const Title: FC<TitleProps> = ({
  children,
  className = '',
  size = 2,
  style,
  type = 'text',
  weight = 'regular',
  ...props
}) => {
  const base = 'rsup-title';
  const cx = classNames(
    base,
    `${base}--color-${type}`,
    `${base}--size-h-${size}`,
    `${base}--weight-${weight}`,
  );

  switch (size) {
    case 1:
      return (
        <h1 className={`${cx} ${className}`} style={style} {...props}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${cx} ${className}`} style={style} {...props}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${cx} ${className}`} style={style} {...props}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${cx} ${className}`} style={style} {...props}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${cx} ${className}`} style={style} {...props}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${cx} ${className}`} style={style} {...props}>
          {children}
        </h6>
      );
    default:
      return null;
  }
};

export default Title;
