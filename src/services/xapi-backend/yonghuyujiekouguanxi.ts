// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 更新用户接口剩余调用次数 更新用户接口剩余调用次数 POST /uapiinvoke/update/leftcount */
export async function postUapiinvokeUpdateLeftcount(
  body: API.UpdateInvokeLeftCountParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/uapiinvoke/update/leftcount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
