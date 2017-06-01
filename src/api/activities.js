/**
 * Created by Micheal Xiao on 2017/5/25.
 */
import fetch from 'utils/fetch';

export function GetList() {
  return fetch({
    url: '/stuff/api/activities',
    method: 'get'
  }).then(function (result) {
    console.log("获取活动信息接口 返回信息")
    console.log(result)
    return result
  })
}

export function creatActive(data) {
  return fetch({
    url: '/stuff/api/activities',
    method: 'post',
    data: data
  }).then(function (result) {
    console.log("创建活动信息接口 返回信息")
    console.log(result)
    return result
  })
}

export function UpdateActive(data) {
  return fetch({
    url: '/stuff/api/activities',
    method: 'put',
    data: data
  }).then(function (result) {
    console.log("编辑活动信息接口 返回信息")
    console.log(result)
    return result
  })
}

export function DeleteActive(id) {
  return fetch({
    url: '/stuff/api/activities/'+ id,
    method: 'delete',
  }).then(function (result) {
    console.log("删除活动信息接口 返回信息")
    console.log(result)
    return result
  })
}

export function getArticle() {
  return fetch({
    url: '/article/detail',
    method: 'get'
  });
}
