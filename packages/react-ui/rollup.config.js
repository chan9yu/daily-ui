import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  // js 번들링
  {
    input: 'src/index.ts',
    output: {
      dir: 'build',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [typescript()],
    preserveModules: true,
    external: ['react', 'classnames', '@rsup/react-icon'],
  },
  // d.ts (타입 정의 파일) 번들링
  {
    input: 'src/typings/props.types.d.ts',
    output: [{ file: 'build/typings/props.types.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
