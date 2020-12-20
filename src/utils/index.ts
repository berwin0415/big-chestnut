import { settings } from "../settings";

const TARO_ENV = process.env.TARO_ENV;

export const isEnvProduction = process.env.NODE_ENV === "production";
export const isEnvDevelopment = process.env.NODE_ENV === "development";
export const isEnvWeapp = TARO_ENV === "weapp";
export const genStaticUrl = (target: string) =>
  settings.host + settings.staticPath + target;
