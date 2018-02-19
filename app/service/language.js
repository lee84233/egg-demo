
const Service = require('egg').Service

class LanguageService extends Service {
  /**
   * 根据 uid 获取 用户语言
   * @param  {[type]}  uid [用户id]
   * @return {Promise}     [用户语言 或 false]
   */
  async getLanguage (uid) {
    let result = await this.app.mysql.select('user', {
      where: {uid},
      columns: ['language'],
      limit: 1
    })
    if (result.length > 0) {
      return result[0].language
    } else {
      return false
    }
  }

  async updateLanguage (uid, lang) {
    let result = await this.app.mysql.query('UPDATE `user` SET `language` = ? WHERE uid = ?', [lang, uid])
    return result
  }
}

module.exports = LanguageService
