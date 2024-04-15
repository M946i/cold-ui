import path from "./path";

export default {
    async getLogin() {
        try {
            return path.baseURL + path.login; // 返回实际的 URL 地址
        } catch (error) {
            throw error; // 如果请求失败，抛出错误
        }
    }
};
