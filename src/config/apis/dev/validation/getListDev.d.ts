export namespace getListDevValidator {
    /**
     * 接口入参类型定义
     */
    export interface ParamType {
        /** 门店id */
        id: number;
    }

    /**
     * 接口返回数据类型定义
     */
    export interface Data {
        /** 默认字符串 */
        defaultVarchar: string;
        /** 页码 */
        pageNum: number;
        /** 每页条数 */
        pageSize: number;
        /** 总数 */
        totalCnt: number;
        /** 总页数 */
        totalPage: number;
    }
    /**
     * 接口返回类型定义
     */
    export interface ReturnType {
        /** 业务代码 */
        businessCode: string;
        /** 业务数据 */
        data: Data;
        /** 错误代码 */
        errorCode: string;
        /** 错误消息 */
        msg: string;
        /** 成功标志 */
        success: boolean;
    }
}
