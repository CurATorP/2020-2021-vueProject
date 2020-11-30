import mysql from 'mysql'
import consola from 'consola'

class MysqlQuery {
  constructor () {
    this.dbp = mysql.createPool({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '88889999',
      database: 'yikekaoyan',
      connectionLimit: 5
    })
  }
  query (sqlstatement, args) {
    return new Promise((resolve, reject) => {
      // 从创建的链接池中获取一个连接，待使用
      this.dbp.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          consola.info('数据库连接成功！')
          connection.query(sqlstatement, args, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
          })
        }
        // 连接使用完，必须释放
        connection.release()
      })
    })
  }
}

export default new MysqlQuery()
