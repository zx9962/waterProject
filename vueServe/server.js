const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./router");
const server = express();

// 解决跨域
server.use(cors());
// 挂载路由模块
server.use(router);
// 错误中间件
server.use((err,res,next)=>{
    if(err) return;
    res.send({
		code: "500",
		msg: "错误" + err.message,
		value: [] 
	})
})
server.listen(2112, () => {
	console.log("恭喜您创建服务器成功!");
})