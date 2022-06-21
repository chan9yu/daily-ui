import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts', 'src/atoms/Button/index.ts'],
  output: {
    dir: 'build',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [typescript()],
  preserveModules: true,
  external: ['react'],
};
