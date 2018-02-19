
const Controller = require('../core/base_controller')

class FoodController extends Controller {
  async list () {
    // 上下文
    const {ctx, service, response, loginState, logger} = this

    // 判断token
    let loginStateInfo = loginState(ctx.session.token)
    if (loginStateInfo.state !== 200) {
      ctx.status = 401
      ctx.body = loginStateInfo
      return
    }

    // 参数
    let {type} = ctx.query
    // 验证
    try {
      ctx.validate({
        type: ['', 'chao', 'dun', 'tang', 'mianshi']
      }, {
        type
      })
    } catch (err) {
      // 打印日志
      ctx.logger.warn(err.errors)
      ctx.body = response(400, '参数错误')
      return
    }

    let foodInfo = await ctx.service.food.list(type)
    ctx.body = response(200, '成功', {
      total: foodInfo.total,
      list: foodInfo.list
    })

  }
}

module.exports = FoodController
