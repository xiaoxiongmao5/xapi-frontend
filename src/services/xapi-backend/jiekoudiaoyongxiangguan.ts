// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 调用接口 调用接口 POST /api/invoke */
export async function postApiInvoke(
  body: API.InvokeInterfaceParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
