/**
 * Created by xinquan.yu on 2017/6/6.
 */
import fetch from 'utils/fetch';

export function userManage(data) {
  return fetch({
    url: process.env.BASE_API + '/uaa/api/users',
    method: 'get',
    data: data
  }).then(function (result) {
    console.log("用户管理接口 返回信息")
    console.log(result)
    return result
  })
}
