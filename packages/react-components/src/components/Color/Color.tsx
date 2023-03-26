import classNames from 'classnames';
import { CSSProperties, FC } from 'react';

import { PRIFIX, SPACING, SpacingType } from '../../constants';

interface ColorProps {
	className?: string;
	width?: SpacingType;
	height?: SpacingType;
	hexCode?: string;
	style?: CSSProperties;
}

const Color: FC<ColorProps> = ({
	className: classNameProp = '',
	height = SPACING.md,
	width = SPACING.md,
	hexCode = '#333',
	style
}) => {
	const classes = classNames(
		classNameProp,
		`${PRIFIX}width--${width}`,
		`${PRIFIX}height--${height}`
	);

	return <div className={classes} style={{ ...style, background: hexCode }} />;
};

export default Color;
