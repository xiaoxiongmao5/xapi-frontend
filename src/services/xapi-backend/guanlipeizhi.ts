// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获得具体IP的限流配置 获得具体IP的限流配置 GET /manage/config/ratelimit */
export async function getManageConfigRatelimit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getManageConfigRatelimitParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/manage/config/ratelimit', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新具体IP限流配置失败 更新具体IP限流配置失败 PUT /manage/config/ratelimit */
export async function putManageConfigRatelimit(
  body: API.RateLimitConfig,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<Record<string, any>>('/manage/config/ratelimit', {
    method: 'PUT',
    data: formData,
    ...(options || {}),
  });
}
