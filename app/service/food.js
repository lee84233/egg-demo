
const Service = require('egg').Service

class FoodService extends Service {
  async list (type) {

    let list = await this.app.mysql.select('food_list', {
      where: {type},
      columns: ['id', 'name', 'description', 'imgpath', 'type'],
      limit: 10
    })

    let total = await this.app.mysql.query('SELECT COUNT(*) FROM FOOD_LIST WHERE TYPE=?', [type])

    return {
      total: total[0]['COUNT(*)'] || 0,
      list
    }
  }
}

module.exports = FoodService
