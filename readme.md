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
const getMPUserPortrait = require('getmpuserportrait')

// 下面的 appid 和 appsecret 要换成自己公众号的，在浏览器登录好公众号后，打开这个网页就可以看到了：https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=1348860549&lang=zh_CN
getMPUserPortrait('appid', 'appsecret').then( res => {
  console.log(res)
})

```
