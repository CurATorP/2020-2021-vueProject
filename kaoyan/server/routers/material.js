import express from 'express'
import consola from 'consola'
import sqlQuery from '../utls/mysql'

const router = express.Router()

/**
 * 考研资料列表查询
 * @params page [页码 default 1]
 * @params limit [每条页数 default 10]
 * @params subject [材料的科目类型，可为空]
 * @params type [题目类型，可为空]
 * @params year [题目年份，可为空]
 * @params search [搜索关键字，可为空]
 * @return Array
 */
router.get('/list', (req, res, next) => {
    let { page = 1, limit = 10, subject = '' , type = '', year = '',search = ''} = req.query
    let WHERE = 'WHERE 1=1'
    if (subject) {
        WHERE += ` AND subject LIKE '%${subject}%'`
    }
    if (type) {
        WHERE += ` AND type LIKE '%${type}%'`
    }
    if (year) {
        WHERE += ` AND year LIKE '%${year}%'`
    }
    if (search) {
        WHERE += ` OR title LIKE '%${search}%'`
    }
    let sql = 'SELECT `id`, `subject`, `type`, `year`, `read`, `title`, `date`, `url` FROM `material` ' + WHERE + ' LIMIT ?, ?'
    let sqlTotal = 'SELECT COUNT(*) as total FROM `material` ' + WHERE
    sqlQuery.query(sql, [(page - 1) * limit ,page * limit]).then(data =>{
        if(data.length){
            sqlQuery.query(sqlTotal).then(result =>{
                res.json({ code:0 , data:{ list: data, total:result[0]['total'] },message:"获取成功" })
            }).catch(error =>{
                res.json({ code:1 , data:'',message:'获取失败'+ error.message })
            })
        }else{
            res.json({ code:0 , data:{ list: data, total:0 },message:"获取成功" })
        }
    }).catch(error => {
        res.json({ code:1 , data:'',message:'获取失败'+ error.message })
    })
})

/**
 * 考研资料详情
 * @params 资料id
 */

router.get('/detail',(req, res, next)=>{
    let {id} = req.query
    if(!id){
        res.json({code:1, data:'',message:'缺少必要参数'})
    }else{
        sqlQuery.query('SELECT * FROM `material` WHERE id = ?',[id]).then(data =>{
            if (data.length) {
              res.json({
                code:0,
                data:data[0],
                message:'find SUCCESS!'
              })
            } else {
              res.json({
                code:1,
                data:'',
                message:'cant find'
              })
            }
          }).catch(error => {
            consola.info(error)
            res.json({ code: 1 , data:'',message:'DB searching ERROR!'})
          })
    }
})


export default router