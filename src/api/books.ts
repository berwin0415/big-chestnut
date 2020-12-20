import request from "../utils/request";
import { BASE_ARTICLE, BASE_BOOK, genUrl } from "./urls";

export const getBookList = ({ pageNo = 1 } = {}) => {
  return request.get(genUrl(BASE_BOOK), { pageNo });
};

export const getBookDetail = (params: {
  id: number | string;
  pageNo?: number;
  pageSize?: number;
}) => {
  const { id, pageNo = 1, pageSize = 99999 } = params;
  return request.get(`${genUrl(BASE_BOOK)}/${id}`, { pageNo, pageSize });
};

export const getArticleDetail = (params: { id: number | string }) => {
  const { id } = params;
  return request.get(`${genUrl(BASE_ARTICLE)}/${id}`);
};
