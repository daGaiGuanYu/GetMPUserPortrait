# GetMPUserPortrait

小程序用户画像对数据分析来说是个很重要的部分，虽然过程不复杂，但是对每个项目都重复造轮子也会令人不愉快，于是有了这个仓库。   
另外，小程序只提供了昨天、过去一周、过去一月的数据，所以一个月之前的数据是获取不到的，因此建议使用 crontab 等类似的定时任务工具，每天在一定的时间获取用户画像数据，保存在自己的数据库里。

## 使用
##### 安装
``` bash
npm install getmpuserportrait
```
##### 获取昨天用户画像
``` javascrip
const MPUserPortrait = require('../src/index')
const config = require('./config')

let test = new MPUserPortrait(config.appid, config.appsecret) // 这里换成你的 appid 和 appsecret

test.get7().then( res => { // 获取 7 天数据
  console.log(res)
})

test.get().then( res => { // 获取昨天数据
  console.log(res)
})

test.get30().then( res => { // 获取 30 天数据
  console.log(res)
})

```
