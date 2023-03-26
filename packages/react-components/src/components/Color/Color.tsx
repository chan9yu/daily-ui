import { FC } from 'react';

interface ColorProps {
	height?: string;
	hexCode?: string;
	width?: string;
}

const Color: FC<ColorProps> = ({ height = '30px', hexCode, width = '30px' }) => {
	return <div style={{ background: hexCode, width, height }} />;
};

export default Color;
