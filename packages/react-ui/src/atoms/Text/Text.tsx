import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { ColorThemeType, SizeType, WeightType } from '../../typings/props.types';

type TextColorType = {
  text: 'text';
  description: 'description';
  input: 'input';
  guide: 'guide';
  white: 'white';
} & ColorThemeType;

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  type?: keyof TextColorType;
  size?: keyof Omit<SizeType, 'xxl'>;
  style?: CSSProperties;
  weight?: keyof WeightType;
}

const Text: FC<TextProps> = ({
  children,
  className = '',
  size = 'base',
  style,
  type = 'text',
  weight = 'regular',
  ...props
}) => {
  const base = 'rsup-text';
  const cx = classNames(
    base,
    `${base}--color-${type}`,
    `${base}--size-${size}`,
    `${base}--weight-${weight}`,
  );

  return (
    <span className={`${cx} ${className}`} style={style} {...props}>
      {children}
    </span>
  );
};

export default Text;
