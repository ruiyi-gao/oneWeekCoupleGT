// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

//_id,_openid,age,expectedAge,expectedGender,expectedHeight,expectedMerits,expectedWeight,gender,height,match,merits,name,weight


const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()


/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = (event, context) => {
  console.log(event)
  console.log("context")
  //var _match
  db.collection('user').update({
    data:{
      age: 100
    }
  })
  return db.collection('user').get()


  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  //const wxContext = cloud.getWXContext()
  //const useropenid = wxContext.OPENID
  const _openid = 0000010000

  // db.collection("user").get({
  //   success: function(res) {
  //     users = res.data
  //   }
  // })

  
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  
}
calcMatch: function (e) {
  var matchScore = 100
  if (_openid.age == e.expectedAge) {

  }
  
}