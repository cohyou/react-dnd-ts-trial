const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kskp.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            },
            {
                test: require.resolve('snapsvg/dist/snap.svg.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          snapsvg: 'snapsvg/dist/snap.svg.js'        
        }
    }
}