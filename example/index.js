const MPUserPortrait = require('../src/index')
const config = require('./config')

let test = new MPUserPortrait(config.appid, config.appsecret)
test.get7().then( res => {
  console.log(res)
})
