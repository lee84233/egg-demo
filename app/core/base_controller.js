/**
 * 定义基类 Controller
 * @type {[type]}
 */
const Controller = require('egg').Controller

class BaseController extends Controller {
  loginState (token) {
    if (!token || token === '') { // 未登录，或登录超时
      return {
        state: 401,
        msg: '未登录或登录超时'
      }
    } else {
      return {
        state: 200,
        msg: '已登录'
      }
    }
  }
  // 封装 response 格式
  response (state, msg, data = {}) {
    return {
      state,
      msg,
      data
    }
  }
}

module.exports = BaseController
