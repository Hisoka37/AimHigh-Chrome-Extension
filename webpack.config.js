module.exports = {
    mode: "development",
    entry: "./src/popup.jsx",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            }
        ]

    },
    resolve: {
        extensions: ['.jsx', 'js']
    },
    
    output: {
        path: path.resole(__dirname, 'dist'),
        filename: "[name].js",
    }
}