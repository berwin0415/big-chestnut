import { settings } from "../settings";
import request from "../utils/request";
import { genUrl, OPENID, LOGIN } from "./urls";

export const getOpenid = ({ code }) => {
  return request.get(genUrl(OPENID), { code });
};

export const login = (params: {
  code: string;
  encrypted: string;
  iv: string;
}) => {
  return request.post(genUrl(LOGIN), params);
};
