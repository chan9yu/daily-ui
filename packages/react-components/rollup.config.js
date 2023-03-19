import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
			exports: 'named'
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: true,
			exports: 'named'
		}
	],
	plugins: [
		peerDepsExternal(),
		typescript({
			tsconfig: './tsconfig.json',
			useTsconfigDeclarationDir: true
		})
	],
	external: ['react', 'react-dom']
};
