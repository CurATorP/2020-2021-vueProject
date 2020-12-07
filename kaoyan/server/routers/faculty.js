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
      res.json({ code: 1, data: '', message: 'LACK OF PARAMS'});
    }
    sqlQuery.query('select * from `faculty` where code = ?', [code]).then(data =>{
      // consola.info(data)
      if(data.length) {
        res.json({ code: 0, data: data, message:'SEARCH SUCCESS'})
      }
      else {
        res.json({ code: 0, data: [], message:'SEARCH SUCCESS'})
      }
    }).catch(error=> {
      res.json({ code: 1, data: '', message: 'SEARCH ERROR'});
    })
  })
  
export default router