// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除接口 删除接口 DELETE /interface/delete */
export async function deleteInterface__openAPI__delete(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/interface/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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

/** 下线接口 下线接口 PUT /interface/offline */
export async function putInterfaceOffline(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/offline', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发布接口 发布接口 PUT /interface/online */
export async function putInterfaceOnline(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/online', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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

/** 更新接口信息 更新接口信息 PUT /interface/update */
export async function putInterfaceUpdate(
  body: API.UpdateInterfaceParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/interface/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
