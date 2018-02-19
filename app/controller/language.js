
const Controller = require('../core/base_controller')

class LanguageController extends Controller {
  async switchLanguage () {
    // 上下文
    const {ctx, service, loginState, response} = this
    
    // 判断token
    let loginStateInfo = loginState(ctx.session.token)
    if (loginStateInfo.state !== 200) {
      ctx.status = 401
      ctx.body = loginStateInfo
      return
    }

    // 参数
    let auth = ctx.request.get('Authorization'),
        uid = auth.split('-')[1],
        {lang} = ctx.request.body

    // 登录和权限
    if (uid === undefined || uid === '' || uid === null) {
      ctx.body = response(401, '未登录或无权限')
      return
    }

    // 是否和数据库相同
    let haveLang = await ctx.service.language.getLanguage(uid)
    if (haveLang === false) {
      ctx.body = response(200, '数据错误')
      return
    } else if (haveLang === lang) {
      ctx.body = response(400, '重复设置')
      return
    }

    // 更新语言
    let updateLang = await ctx.service.language.updateLanguage(uid, lang)
    if (updateLang.affectedRows === 1) {
      ctx.body = response(200, '设置成功')
    } else {
      ctx.body = response(400, '设置失败')
    }
  }
}

module.exports = LanguageController
