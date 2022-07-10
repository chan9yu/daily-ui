export type ColorThemeType = {
  primary: 'primary';
  secondary: 'secondary';
  success: 'success';
  error: 'error';
};

export type SpaceType = {
  xxxs: 'xxxs';
  xxs: 'xxs';
  xs: 'xs';
  sm: 'sm';
  lg: 'lg';
  xl: 'xl';
  xxl: 'xxl';
  xxxl: 'xxxl';
};

export type SizeType = { base: 'base' } & Omit<SpaceType, 'xxxs' | 'xxs' | 'xxl' | 'xxxl'>;

export type WeightType = {
  thin: 'thin';
  light: 'light';
  regular: 'regular';
  medium: 'medium';
  bold: 'bold';
};
