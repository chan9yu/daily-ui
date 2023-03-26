export const SPACING = {
	xxxs: 'xxxs',
	xxs: 'xxs',
	xs: 'xs',
	sm: 'sm',
	md: 'md',
	xl: 'xl',
	xxl: 'xxl',
	xxxl: 'xxxl'
} as const;
export type SpacingType = keyof typeof SPACING;
