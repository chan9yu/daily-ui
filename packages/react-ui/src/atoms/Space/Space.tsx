import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { SpaceType } from '../../typings/props.types';

interface SpaceProps {
  children: ReactNode;
  side?: 'all' | 'top' | 'right' | 'bottom' | 'left' | 'x' | 'y';
  space?: keyof SpaceType;
  type?: 'padding' | 'margin';
}

const Space: FC<SpaceProps> = ({ children, side = 'all', space = 'xs', type = 'padding' }) => {
  const base = `rsup-space__${type}`;
  const className = classNames(
    { [`${base}--${space}`]: side === 'all' },
    { [`${base}--${side}-${space}`]: side !== 'all' },
  );

  return <div className={className}>{children}</div>;
};

export default Space;
