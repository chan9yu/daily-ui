const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

/** @description dist 파일 여부 검사, 없다면 자동생성 */
try {
	fs.mkdirSync(path.join(__dirname, '..', 'dist'));
	console.log('💾 dist 폴더 생성합니다...');
} catch {
	console.log('💾 dist 폴더가 존재합니다...');
}

/**
 * @param {string} filePath global scss 파일 경로
 * @param {string} fileName css 빌드 후 파일 경로
 * @returns {void} 입력한 경로에 빌드된 css 파일 생성
 */
const compile = (filePath, fileName) => {
	const result = sass.renderSync({
		data: fs.readFileSync(path.resolve(filePath)).toString(),
		sourceComments: false,
		outputStyle: 'expanded',
		includePaths: [path.resolve('src')]
	});

	/** @description vendor prefix 적용 후 빌드  */
	postcss([autoprefixer()])
		.process(result.css.toString(), { from: undefined })
		.then(value => {
			fs.writeFileSync(path.resolve(fileName), value.toString());
		});
};

compile('src/global.scss', 'dist/global.css');
