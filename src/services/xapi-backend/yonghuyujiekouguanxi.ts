// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据用户信息、接口id获取用户接口信息 根据用户信息、接口id获取用户接口信息 GET /userinterface/${param0} */
export async function getUserinterfaceId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserinterfaceIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GetUserInterfaceInfoByIdResponse>(`/userinterface/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新用户接口剩余调用次数 更新用户接口剩余调用次数 POST /userinterface/update/leftcount */
export async function postUserinterfaceUpdateLeftcount(
  body: API.UpdateInvokeLeftCountParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/userinterface/update/leftcount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
