module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer: {
    host: '0.0.0.0',
    public: '0.0.0.0:8080/app',
    disableHostCheck: true,
    //proxy: 'http://192.168.1.1/',
  },
}
