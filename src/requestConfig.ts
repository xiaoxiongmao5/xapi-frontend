import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

// // 生成5位随机数
// function generateRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 9000) + 1000;
//   return randomNumber;
// }

// // 生成指定长度的随机字符串
// function generateRandomString(length: number) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomString = '';

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
//   }

//   return randomString;
// }

// // 生成API签名
// function getAPISign(body: string, secretKey: string) {
//   const dataToHash = `${body}.${secretKey}`;
//   const hash = CryptoJS.SHA256(dataToHash);
//   const sign = hash.toString(CryptoJS.enc.Base64);
//   return sign;
// }

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const requestConfig: RequestConfig = {
  baseURL: 'http://localhost:8090',
  withCredentials: true,

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // // 拦截请求配置，进行个性化处理。
      // const url = config?.url?.concat('?token = 123');
      // let accessKey = 'xiaoxiong';
      // let secretKey = 'xiaoxiong5';
      // let nonce = generateRandomNumber();
      // let timestamp = new Date().getTime();
      // let body = '';
      // const headers = {
      //   ...config.headers,
      //   accessKey: accessKey,
      //   nonce: nonce,
      //   timestamp: timestamp,
      //   sign: getAPISign(accessKey + nonce + timestamp + body, secretKey),
      // };
      // return { ...config, url, headers };
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response as unknown as ResponseStructure;
      console.log('data', data);
      if (data?.result !== 0) {
        // message.error('请求失败！');
        throw new Error(data.msg);
      }
      return response;
    },
  ],
};
