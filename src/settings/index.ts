import { isEnvProduction } from "../utils";

export const HOST_PRD = "https://www.hanbw.top";
export const HOST_DEV1 = HOST_PRD;
export const STATIC_PATH = "/public";
export const TOKEN = "AUTH_TOKEN";

export interface Settings {
  host: string;
  staticPath: string;
}

// 全局状态
export const GLOBAL_DATA_USERINFO = "GLOBAL_DATA_USERINFO";

// 消息订阅
export const USER_LOGIN = "USER_LOGIN";
export const settings: Settings = {
  host: isEnvProduction ? HOST_PRD : HOST_DEV1,
  staticPath: STATIC_PATH,
};
