'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518418663659_9331';

  // add your config here
  config.middleware = ['errorHandler', 'saveSession']
  // errorHandler 只对 /api 下有效
  config.errorHandler = {
    match: '/api',
  }
  config.saveSession = {
    match: '/api'
  }

  // host 配置
  config.cluster = {
    listen: {
      port: 8000,
      hostname: 'localhost',
      // path: '/var/run/egg.sock',
    }
  }

  // csrf
  config.security = {
    csrf: false,
    domainWhiteList: ['http://localhost:8080']
  }

  // 数据库信息
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'my-menu'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  }

  // session 配置
  config.session = {
    key: 'MY_FOOD_SESSION',
    maxAge: 3600 * 1000, // ms
    // expires: 10 * 1000, // 失效日期
    httpOnly: true, // 是否被js访问
    encrypt: true  // 是否加密
  }

  // 国际化
  config.i18n = {
    defaultLocale: 'zh-CN',
  }

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }

  // 添加 news 的配置项
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }

  return config;
};
