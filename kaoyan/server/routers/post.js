import express, { response } from 'express'
import consola from 'consola'
import sqlQuery from '../utls/mysql'

const router = express.Router()

router.get('/test',(request, response, next) => {
  response.json({ message: 'Response Success!!'})
})

/**
 * 获取文章列表
 * @parmas type 文章类型[选项参数]
 * @parmas page 页码【默认第一页】
 * @parmas limit 每页条数【默认10条】
 * @parmas Array 文章列表数据[id,title,date,type]
 */
router.get('/list',(req,res,next) => {
  let {type,page = 1,limit = 10} = req.query
  // consola.info(type, page, limit)
  let sql = 'SELECT * FROM `post` LIMIT ?, ?'
  let totalSQL = 'SELECT COUNT(*) as total From `post`'
  if(type){
    sql = 'SELECT * FROM `post` WHERE type = ? LIMIT ?, ?'
    totalSQL = 'SELECT COUNT(*) as total FROM `post` WHERE type = ?'
  }
  sqlQuery.query(sql, type ? [type, (page - 1)*limit,page*limit] : [(page - 1)*limit,page*limit]).then(data=>{
    // consola.info(data)
    if(data.length){
      sqlQuery.query(totalSQL , type ? [type] : []).then(result =>{
        res.json({ code:0 , data: {
          list : data,
          total: result[0][`total`]
        },message : 'DBsearch SUCCESS!'})
      }).catch(error =>{
        res.json({ code: 1, data: '', message:'DBsearch ERROR!'})
      })
    }else{
      res.json({ code:0, data:{
          list : [],
          total: 0
        },message : 'DBsearch SUCCESS!'})
    }
  }).catch(error => {
    consola.info(error)
    res.json({ code: 1 , data:'',message:'DBsearch ERROR!'})
  })
})

export default router
