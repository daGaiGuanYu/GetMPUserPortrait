const axios = require('axios')

class MPUserPortrait {
  constructor(appid, appsecret){
    this.appid = appid
    this.appsecret = appsecret
  }

  get(){
    return getData(this.appid, this.appsecret)
  }
  get7(){
    return getData(this.appid, this.appsecret, 7)
  }
  get30(){
    return getData(this.appid, this.appsecret, 30)
  }
}

function getData(appid, appsecret, before=1){ // before 是获取数据的天数，默认为 1，代表昨天（可选数值仅：1，7，30）
  let begin = new Date() - before*24*60*60*1000 // 时间戳
  begin = getDateStr(begin)
  let end = new Date() - 1*24*60*60*1000
  end = getDateStr(end)

  return axios(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`) // 获取 access_token
    .then( res => res.data.access_token )
    .then( access_token => axios.post('https://api.weixin.qq.com/datacube/getweanalysisappiduserportrait?access_token=' + access_token, {
      begin_date: begin,
      end_date: end
    })).then( res => res.data )
}

function getDateStr(date){
  date = new Date(date)
  let y = date.getFullYear()
  let m = date.getMonth() + 1 // 月份从 0 开始
  m = format(m)
  let d = date.getDate()
  d = format(d)
  return '' + y + m + d

  function format(number){
    if(number<10)
      return '0'+number
    else
      return number
  }
}

module.exports = MPUserPortrait