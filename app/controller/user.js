
const Controller = require('../core/base_controller')

class UserController extends Controller {
  async register () {
    // 上下文...
    const {ctx, service, logger, response} = this

    // 参数
    let {phone, password} = ctx.request.body

    // 验证
    try {
      ctx.validate({
        phone: 'string',
        password: 'string'
      }, {
        phone,
        password
      })
    } catch (err) {
      // 打印日志
      ctx.logger.warn(err.errors)
      ctx.body = response(400, '参数错误')
      return
    }

    // 检测是否已注册
    let isRegUser = await ctx.service.user.isRegister(phone)
    if (isRegUser) {
      ctx.body = response(400, '手机号已被注册')
      return
    }

    // 注册
    let result = await ctx.service.user.register(phone, password)

    // response
    if (result.affectedRows === 1) {
      ctx.body = response(200, '成功')
    } else {
      ctx.body = response(400, '注册失败')
    }
  }

  async login () {
    // 上下文...
    const {ctx, service, response} = this

    // 参数
    let {phone, password} = ctx.request.body

    // 验证
    try {
      ctx.validate({
        phone: 'string',
        password: 'password'
      }, {
        phone,
        password
      })
    } catch (e) {
      ctx.body = response(400, '参数错误')
      return
    }

    // 验证1
    let isReg = await ctx.service.user.isRegister(phone)
    if (!isReg) {
      ctx.body = response(400, '手机号尚未注册')
      return
    }

    // 验证2
    let userInfo = await ctx.service.user.login(phone, password)
    if (userInfo.length > 0) {
      ctx.session.token = `token-${userInfo[0].uid}`
      ctx.body = response(200, '登录成功', {
        token: `token-${userInfo[0].uid}`,
        language: userInfo[0].language
      })
    } else {
      ctx.body = response(400, '密码错误')
    }
  }

}

module.exports = UserController
