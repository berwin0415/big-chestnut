import request from "../utils/request";
import { BASE_USER, genUrl } from "./urls";

export const getUserinfo = () => {
  return request.get(genUrl(BASE_USER));
};
