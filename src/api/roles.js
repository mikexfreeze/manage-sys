/**
 * Created by Micheal Xiao on 2017/6/19.
 */
import fetch from 'utils/fetch';

export function GetRolesList(page) {
    let params;
    if(page){
        params = {
            page:page.page - 1,
            size: page.size
        }
    }
    return fetch({
        url: process.env.BASE_API + '/uaa/api/roles',
        method: 'get',
        params: params
    }).then(function (result) {
        console.log("get roles API")
        console.log(result)
        return result
    })
}

export function DeleteUsers(login) {
    return fetch({
        url: process.env.BASE_API + '/uaa/api/users/'+ login,
        method: 'delete',
    }).then(function (result) {
        console.log("删除用户信息接口 返回信息")
        console.log(result)
        return result
    })
}