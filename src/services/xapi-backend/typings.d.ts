declare namespace API {
  type CreateInterfaceParams = {
    description?: string;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    responseheader?: string;
    url?: string;
    userid?: number;
  };

  type CreateUserParamsJSON = {
    checkUserPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type getInterfaceIdParams = {
    /** 接口id */
    id: number;
  };

  type getInterfacePagelistParams = {
    /** pageSize */
    pageSize: number;
    /** current */
    current: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InvokeInterfaceParams = {
    id?: number;
    requestparams?: string;
  };

  type ResponseWithData = {
    data?: ValidXapiInterfaceInfo;
    msg?: string;
    result?: number;
  };

  type UpdateInterfaceParams = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    responseheader?: string;
    url?: string;
    userid?: number;
  };

  type ValidXapiInterfaceInfo = {
    /** 创建时间 */
    createtime?: string;
    /** 描述 */
    description?: string;
    /** 主键 */
    id?: number;
    /** 请求类型 */
    method?: string;
    /** 名称 */
    name?: string;
    /** 请求头 */
    requestheader?: string;
    /** * 请求参数
	[
		{"name":"xxx", "type":"string"}
	] */
    requestparams?: string;
    /** 响应头 */
    responseheader?: string;
    /** 接口状态（0-关闭，1-开启） */
    status?: number;
    /** 更新时间 */
    updatetime?: string;
    /** 接口地址 */
    url?: string;
    /** 创建人 */
    userid?: number;
  };
}
