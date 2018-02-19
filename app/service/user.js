const Service = require('egg').Service;

class UserService extends Service {
  // 注册
  async register (phone, password) {
    let user = await this.app.mysql.insert('user', {
      phone,
      password,
      name: '',
      language: 'zh'
    })
    return user
  }

  // 登录
  async login (phone, password) {
    let userInfo = await this.app.mysql.select('user', {
      where: {phone, password},
      limit: 1
    })
    return userInfo
  }

  // 是否存在该账号
  async isRegister (phone) {
    let user = await this.app.mysql.select('user', {
      where: {phone},
      limit: 1
    })
    return user.length > 0 ? true :false
  }
}

module.exports = UserService;
