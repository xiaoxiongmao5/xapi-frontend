// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除接口 删除接口 GET /interface/delete */
export async function getInterface__openAPI__delete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterface_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/interface/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得接口列表 获取接口列表信息 GET /interface/list */
export async function getInterfaceList(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 注册接口 注册接口 POST /interface/register */
export async function postInterfaceRegister(
  body: API.CreateInterfaceParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/interface/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新接口信息 更新接口信息 POST /interface/update */
export async function postInterfaceUpdate(
  body: API.UpdateInterfaceParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/interface/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
