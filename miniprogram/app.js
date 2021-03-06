//app.js
App({
  onLaunch: function () {
       
    //TODO: edit these deadline
    this.globalData = {
      showEditButton:true,
      showWechatId: false,
      maximum_user:  80
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'owcp-gt',
        traceUser: true,
      })
    }
  },

  checkEditStandardDeadline: function() {
    var that = this
    var util = require('utils/utils.js')
    var time = util.formatTime(new Date());
    var month = parseInt(time.substring(5, 7))
    var date = parseInt(time.substring(8, 10))
    if (month > that.globalData.edit_standard_deadline_month || (month >= that.globalData.edit_standard_deadline_month && date > that.globalData.edit_standard_deadline_date)) {
      that.globalData.showEditButton = false
    }
  },

  checkAssignedCp: function() {
    const db = wx.cloud.database()
    var that = this
    db.collection('user')
    .where({
      _openid: that.globalData.openid
    })
    .watch({
      onChange: snapshot => {
        const { docs, docChanges } = snapshot
        console.log(snapshot)
      }
    })
  }
})
