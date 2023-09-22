const express = require("express");
const mysql = require("mysql");
const router = express.Router();

// 链接数据库
const db = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"examvue"
})

// 创建路由
router.get("/data",(req,res,next)=>{
    // 查询数据库
    let sql = `SELECT * FROM datainfo`;
    db.query(sql,(err,result)=>{
        if(err) return next(err);
        res.send(result);
    })
})
// 产品配置(型号设置)：修改操作
router.get("/upData",(req,res,next)=>{
    var data = req.query;
    let sql = `UPDATE datainfo SET brand = "${data.brand}", type = "${data.type}", num = "${data.num}", frequency = "${data.frequency}", remark = "${data.remark}" WHERE id = "${data.id}"`;
    db.query(sql,(err,result)=>{
        if(err) return next(err);
        res.send(result);
    })
})
// 产品配置(型号设置)：添加操作
router.get("/addData",(req,res,next)=>{
    var data = req.query;
    console.log(data);
    let sql = `INSERT INTO datainfo VALUES (null,"${data.brand}","${data.type}","${data.num}","${data.frequency}","${data.remark}")`;
    db.query(sql,(err,result)=>{
        if(err) return next(err);
        res.send(result);
    })
})

// 消息推送接口：查询
router.get("/inquire",(req,res,next)=>{
    // 查询数据库
    let sql = `SELECT * FROM tuisong`;
    db.query(sql,(err,result)=>{
        if(err) return next(err);
        res.send(result);
    })
})
// 消息推送接口: 添加
router.get("/pushPort",(req,res,next)=>{
    let data = req.query;
    // 查询数据库
    let sql = `INSERT INTO tuisong VALUES (null,"${data.user}","${data.time}","${data.platform}","${data.people}","${data.year}","${data.balance}","${data.desc}")`;
    db.query(sql,(err,result)=>{
        if(err) return next(err);
        res.send(result);
    })
})
// 登录接口
router.get("/userinfo",(req,res,next)=>{
  let data = req.query
  console.log(data);
  // 查询数据库
  let sql = `SELECT * FROM user WHERE username="${data.username}" AND pwd="${data.pwd}"`;
  db.query(sql,(err,result)=>{
      if(err) return next(err);
      res.send(result);
  })
})
// 注册接口
router.get("/userinfoZC",(req,res,next)=>{
  let data = req.query
  console.log(data);
  // 查询数据库
  let sql = `SELECT * FROM user WHERE username="${data.username}"`;
  db.query(sql,(err,result)=>{
      if(err) return next(err);
      res.send(result);
  })
})
// 登录接口
router.get("/setInfo",(req,res,next)=>{
  let data = req.query
  console.log(data)
  // 插入数据库
  let sql = `INSERT INTO user VALUES ("${data.id}","${data.username}","${data.pwd}","${data.img}")`;
  db.query(sql,(err,result)=>{
      if(err) return next(err);
      res.send(result);
  })
})


module.exports = router;