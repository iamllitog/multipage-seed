module.exports = {
  contentBase: './build/',
  host: 'localhost',
  port: 8081, // 默认8080
  inline: true, // 可以监控js变化
  watchContentBase: false,
  proxy: {
    '/obt': 'http://114.55.138.53:9000',
  },
};
