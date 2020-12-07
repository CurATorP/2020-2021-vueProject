import express from 'express'
import console from 'console'
import sqlQuery from '../utls/mysql'
const router = express.Router()
/**
 * 根据院校代码查询院校分系信息
 */

router.get('/info', (req, res, next) => {
    let { code } = req.query
    if (code === '' || code === '#') {
      res.json({ code: 1, data: '', message: '缺少参数'});
    }
    sqlQuery.query('select * from `faculty` where code = ?', [code]).then(data =>{
      consola.info(data)
      if(data.length) {
        res.json({ code: 0, data: data, message:'查询成功'})
      }
      else {
        res.json({ code: 0, data: [], message:'查询成功'})
      }
    }).catch(error=> {
      res.json({ code: 1, data: '', message: '查询失败'});
    })
  })
  
export default router