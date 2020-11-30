import express, { response, Router } from 'express'
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
  let sql = 'SELECT id, date,title,type FROM `post` LIMIT ?, ?'
  let totalSQL = 'SELECT COUNT(*) as total From `post`'
  if(type){
    sql = 'SELECT id, date,title,type FROM `post` WHERE type = ? LIMIT ?, ?'
    totalSQL = 'SELECT COUNT(*) as total FROM `post` WHERE type = ?'
  }
  sqlQuery.query(sql, type ? [type, (page - 1)*limit*1,page*limit*1] : [(page - 1)*limit*1,page*limit*1]).then(data=>{
    // consola.info(data)
    if(data.length){
      sqlQuery.query(totalSQL , type ? [type] : []).then(result =>{
        res.json({ code:0 , data: {
          list : data,
          total: result[0][`total`]
        },message : 'DB searching SUCCESS!'})
      }).catch(error =>{
        res.json({ code: 1, data: '', message:'DB searching ERROR!'})
      })
    }else{
      res.json({ code:0, data:{
          list : [],
          total: 0
        },message : 'DB searching SUCCESS!'})
    }
  }).catch(error => {
    consola.info(error)
    res.json({ code: 1 , data:'',message:'DB searching ERROR!'})
  })
})


/**
 * 文章详情页
 * @params 文章ID
 */
router.get('/detail',(req,res,next) =>{
  let { id } = req.query
  if(id) {
    sqlQuery.query('SELECT * FROM `post` WHERE id = ?',[id]).then(data =>{
      if (data.length) {
        res.json({
          code:0,
          data:data[0],
          message:'Content find SUCCESS!'
        })
      } else {
        res.json({
          code:1,
          data:'',
          message:'Content cant find'
        })
      }
    }).catch(error => {
      consola.info(error)
      res.json({ code: 1 , data:'',message:'DB searching ERROR!'})
    })
  } else {
    res.json({
      code : 1 , 
      data : '',
      message : 'Content cant find'
    })
  }
})

export default router
