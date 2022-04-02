// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './'
}
//https://<USERNAME>.github.io/<REPO>/
//https://feifeiseal.github.io/Portfolio-VueCLI/