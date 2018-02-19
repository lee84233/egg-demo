'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const APIPATH = '/api'

module.exports = app => {
  const {router, controller} = app
  // router.get('/', controller.home.index);

  /**
   * 接口地址
   */
  // 登录
  router.put(`${APIPATH}/register`, controller.user.register)
  // 注册
  router.put(`${APIPATH}/login`, controller.user.login)
  // 切换语言
  router.post(`${APIPATH}/switchLanguage`, controller.language.switchLanguage)

  // 获取菜单列表
  router.get(`${APIPATH}/foodList`, controller.food.list)
};
