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

/** 获得所有接口列表 获取所有接口列表 GET /interface/list */
export async function getInterfaceList(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 下线接口 下线接口 PATCH /interface/offline */
export async function patchInterfaceOffline(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/offline', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发布接口 发布接口 PATCH /interface/online */
export async function patchInterfaceOnline(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/online', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获得接口列表 分页获取接口列表 GET /interface/pagelist */
export async function getInterfacePagelist(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfacePagelistParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/interface/pagelist', {
    method: 'GET',
    params: {
      ...params,
    },
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
