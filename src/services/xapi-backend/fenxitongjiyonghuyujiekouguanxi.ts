// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取接口调用次数TopN的信息列表 通过用户接口信息表查询调用次数最多的接口ID，再关联查询接口详细信息 GET /analysis/top/interface/invoke */
export async function getAnalysisTopInterfaceInvoke(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAnalysisTopInterfaceInvokeParams,
  options?: { [key: string]: any },
) {
  return request<API.ListTopNOfInterfaceInvokeCountResponse>('/analysis/top/interface/invoke', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
