export const handleSessionStorage = {
    /**
     * 设置sessionStorage
     * @param {string} key 键name
     * @param {*} value 值
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * 获取sessionStorage
     * @param {string} key 键name
     * @returns {*}
     */
    get(key: string) {
        return JSON.parse(sessionStorage.getItem(key) as string);
    },

    /**
     * 删除sessionStorage
     * @param {string} key 键name
     */
    remove(key: string) {
        sessionStorage.removeItem(key);
    }
};
