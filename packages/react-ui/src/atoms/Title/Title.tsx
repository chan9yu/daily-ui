import React, { CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ColorThemeType, WeightType } from '../../typings/props.types';

type TitleColorType = {
  title: 'title';
  description: 'description';
  input: 'input';
  guide: 'guide';
  white: 'white';
} & ColorThemeType;
type TitleSizeType = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
  children: ReactNode;
  className?: string;
  type?: keyof TitleColorType;
  size?: TitleSizeType;
  style?: CSSProperties;
  weight?: keyof WeightType;
}

// children,
// className = '',
// type = 'title',
// size = 2,
// style,
// weight = 'regular',

const Title: FC<TitleProps> = ({
  children,
  className = '',
  size = 2,
  style,
  type = 'title',
  weight = 'regular',
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
        <h1 className={`${cx} ${className}`} style={style}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={`${cx} ${className}`} style={style}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={`${cx} ${className}`} style={style}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${cx} ${className}`} style={style}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${cx} ${className}`} style={style}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${cx} ${className}`} style={style}>
          {children}
        </h6>
      );
    default:
      return null;
  }
};

export default Title;
