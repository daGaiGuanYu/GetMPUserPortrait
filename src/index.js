const axios = require('axios')
const { appid, appsecret } = require('./config')

function getYesterdayData(){
  return axios(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`) // 获取 access_token
    .then( res => {
      console.log(res);
    })
}