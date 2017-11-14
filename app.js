const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  },
  publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
