const axios = require('axios')

function getYesterdayData(appid, appsecret){
  let yesterdayStr = getYesterdayStr()

  return axios(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`) // 获取 access_token
    .then( res => res.data.access_token )
    .then( access_token => axios.post('https://api.weixin.qq.com/datacube/getweanalysisappiduserportrait?access_token=' + access_token, {
      begin_date: yesterdayStr,
      end_date: yesterdayStr
    })).then( res => ({
      data: res.data,
      date: yesterdayStr
    }))
}

function getYesterdayStr(){
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1 // 月份从 0 开始
  m = format(m)
  let d = date.getDate() - 1 // 昨天，不是今天
  d = format(d)
  return '' + y + m + d

  function format(number){
    if(number<10)
      return '0'+number
    else
      return number
  }
}

module.exports = getYesterdayData