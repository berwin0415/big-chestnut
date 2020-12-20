import { settings } from "../settings";

export const genUrl = (target: string) => settings.host + target;

// common api
export const OPENID = "/api/v1/common/openid";
export const LOGIN = "/api/v1/common/login";

// users api
export const BASE_USER = "/api/v1/user";

// books api
export const BASE_BOOK = "/api/v1/books";

// articles api
export const BASE_ARTICLE = "/api/v1/articles";
