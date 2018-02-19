'use strict';

// had enabled by egg
// exports.static = true;

// 视图插件
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}

// 数据库插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
}

// 验证插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
}
