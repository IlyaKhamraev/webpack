const path = require("node:path");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const target = devMode ? 'web' : 'browserslist';

const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // [contenthash] - нужен для того, что бы каждый раз когда изменяются файлы, у сборки будет изменятся имя,
        // таким образом браузер будет брать файлы не из хеша и отправлять клиенту,
        // а будет новые скачивать, если произошли изменения.
        filename: 'index.[contenthash].js' //
    }
}
