import express from 'express'
import console from 'console'
import sqlQuery from '../utls/mysql'
const router = express.Router()
// /api/school/list

/*
 *获取學校列表
 *@params page 页码(默认第一页)
 *@params limit 每页条数(默认10条)
 *return Array seacrch(可選)
 */
router.get('/list', (req, res, next) => {
    let {
      page = 1,
        limit = 10,
        search
    } = req.query
    let sql = 'SELECT id,school,code,ship,addr,graduate,admit FROM `school` LIMIT ?,?'
    if (search) {
      sql = 'SELECT id,school,code,ship,addr,graduate,admit FROM `school` where shool = ? LIMIT ?,?'
    }
    sqlQuery.query(sql, search ? [search, page - 1, page * limit] : [page - 1, page * limit]).then(
      data => {
        consola.info(data)
        res.json({
          code: 0,
          data: data,
          message: '查询成功'
        });
      }).catch(error => {
      res.json({
        code: 1,
        data: '',
        message: '查询失败'
      })
    })
    // res.json({ code: 0, data: '',message: '获取成功'})
  })
  /**
   * 
   */
  router.get('/resume',(req, res, next) => {
    let { code } = req.query
    if (code === '' || code === '#') {
      res.json({ code: 1, data: '', message: '缺少参数'});
    }
    sqlQuery.query('select leader,resume,surround,weburl,graduate from `school` where code = ?', [code]).then(data =>{
      res.json({ code: 0, data: data.length ? data[0]:[], message:'成功'})
    }).catch(error=> {
      res.json({ code: 1, data: '', message: '查询失败'});
    })
  })
export default router