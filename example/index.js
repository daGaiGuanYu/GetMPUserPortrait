const getMPUserPortrait = require('getmpuserportrait')

getMPUserPortrait('appid', 'appsecret').then( res => {
  console.log(res)
})