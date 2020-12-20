import { isEnvProduction } from "../utils";
import { HOST_DEV1, HOST_PRD, STATIC_PATH } from "./constants";

export interface Settings {
  host: string;
  staticPath: string;
}
export interface GlobalData {
  openid: string | null;
  [key: string]: any;
}

export const settings: Settings = {
  host: isEnvProduction ? HOST_PRD : HOST_DEV1,
  staticPath: STATIC_PATH
};

const globalData: GlobalData = {
  openid: null,
  logined: false
};

export const setGlobalData = (data: Partial<GlobalData>) => {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];
      globalData[key] = element;
    }
  }
};

export const getGlobalData = (key: string) => globalData[key];
