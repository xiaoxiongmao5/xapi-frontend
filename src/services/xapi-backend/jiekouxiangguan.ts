// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获得接口列表 获取接口列表信息 GET /interface/list */
export async function getInterfaceList(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/interface/list', {
    method: 'GET',
    ...(options || {}),
  });
}
