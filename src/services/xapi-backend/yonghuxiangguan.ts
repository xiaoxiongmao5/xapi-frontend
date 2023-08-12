// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 用户登录 用户登录 POST /user/login */
export async function postLogin(
  body: {
    /** 账户名称 */
    useraccount: string;
    /** 密码 */
    userpassword: string;
  },
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

  return request<Record<string, any>>('/user/login', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 用户退出 用户退出 GET /user/logout */
export async function getLogout(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLogoutParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/user/logout', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户注册 用户注册 POST /user/register */
export async function postRegister(
  body: API.CreateUserParamsJSON,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获得用户信息 根据用户的 Cookie 获取用户信息 GET /user/userinfo */
export async function getUserinfo(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/user/userinfo', {
    method: 'GET',
    ...(options || {}),
  });
}
