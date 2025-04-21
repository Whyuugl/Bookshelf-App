const path = require("path");

module.exports = {
    mode: "development", // Ubah ke "production" kalau ingin optimasi
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
