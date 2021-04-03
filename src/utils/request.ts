import Taro, { getStorageSync, navigateTo } from "@tarojs/taro";
import { TOKEN } from "../settings";

const request = <Res = any, Params = Record<string, any>>(
  options: Taro.request.Option<Params>
) => {
  const token = getStorageSync(TOKEN);
  return Taro.request<Res>({
    ...options,
    header: {
      Authorization: token
    }
  }).then(res => {
    if (res.statusCode === 401) {
      navigateTo({ url: "/pages/login/index" });
      return Promise.reject("Authorization Error");
    }
    return res
  });
};

const methodGet = <Res = any, Params = Record<string, any>>(
  url: string,
  params?: Params,
  options?: Taro.request.Option<Params>
) => {
  return request<Res, Params>({
    method: "GET",
    url,
    data: params,
    ...options
  });
};

const methodPost = <Res = any, Params = Record<string, any>>(
  url: string,
  params?: Params,
  options?: Taro.request.Option<Params>
) => {
  return request<Res, Params>({
    method: "POST",
    url,
    data: params,
    ...options
  });
};

export default {
  get: methodGet,
  post: methodPost
};
