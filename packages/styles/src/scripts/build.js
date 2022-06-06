const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

//* build 폴더 생성
(function () {
	try {
		console.log("💾 build 폴더 생성...");
		fs.mkdirSync(path.join(__dirname, "..", "build"));
	} catch {
		console.log("build 폴더가 존재합니다...");
	}
})();

const result = sass.renderSync({
	data: fs.readFileSync(path.resolve("src/global.scss")).toString(),
	outputStyle: "expanded",
	outFile: "global.css",
	includePaths: [path.resolve("src")],
});

fs.writeFileSync(path.resolve("src/build/global.css"), result.css.toString());
