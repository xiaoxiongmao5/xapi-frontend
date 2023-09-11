declare namespace API {
  type CreateInterfaceParams = {
    description?: string;
    host?: string;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    requestparamsexample?: string;
    responseheader?: string;
    url?: string;
    userid?: number;
  };

  type getAnalysisTopInterfaceInvokeParams = {
    /** TOP N */
    n: number;
  };

  type getInterfaceIdParams = {
    /** 接口id */
    id: number;
  };

  type GetInterfaceInfoByIdResponse = {
    data?: ValidInterfaceInfo;
    msg?: string;
    result?: number;
  };

  type getInterfacePagelistParams = {
    /** pageSize */
    pageSize: number;
    /** current */
    current: number;
  };

  type getUserinterfaceIdParams = {
    /** 接口id */
    id: number;
  };

  type GetUserInterfaceInfoByIdResponse = {
    data?: ValidUserInterfaceInfo;
    msg?: string;
    result?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InvokeInterfaceParams = {
    id?: number;
    requestparams?: string;
  };

  type ListTopNOfInterfaceInvokeCountResponse = {
    data?: ValidTopNOfInterfaceInvokeCountRow[];
    msg?: string;
    result?: number;
  };

  type UpdateInterfaceParams = {
    description?: string;
    host?: string;
    id?: number;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    requestparamsexample?: string;
    responseheader?: string;
    url?: string;
    userid?: number;
  };

  type UpdateInvokeLeftCountParams = {
    interfaceId?: number;
    leftNum?: number;
  };

  type UserRegisterParams = {
    checkUserpassword?: string;
    useraccount?: string;
    userpassword?: string;
  };

  type ValidInterfaceInfo = {
    /** 创建时间 */
    createtime?: string;
    /** 描述 */
    description?: string;
    /** 接口地址 */
    host?: string;
    /** 主键 */
    id?: number;
    /** 请求类型 */
    method?: string;
    /** 名称 */
    name?: string;
    /** 请求头 */
    requestheader?: string;
    /** 请求参数 */
    requestparams?: string;
    /** 请求参数示例	[{"name":"xxx", "type":"string"}] */
    requestparamsexample?: string;
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

  type ValidTopNOfInterfaceInvokeCountRow = {
    interfaceinfoid?: number;
    invokecount?: number;
    name?: string;
  };

  type ValidUserInterfaceInfo = {
    banstatus?: number;
    /** 创建时间 */
    createtime?: string;
    /** 描述 */
    description?: string;
    /** 接口地址 */
    host?: string;
    /** 主键(接口ID) */
    id?: number;
    /** 剩余调用次数 */
    leftnum?: number;
    /** 请求类型 */
    method?: string;
    /** 名称 */
    name?: string;
    /** 请求头 */
    requestheader?: string;
    /** 请求参数 */
    requestparams?: string;
    /** 请求参数示例	[{"name":"xxx", "type":"string"}] */
    requestparamsexample?: string;
    /** 响应头 */
    responseheader?: string;
    /** 接口状态（0-关闭，1-开启） */
    status?: number;
    /** 总调用次数 */
    totalnum?: number;
    /** 更新时间 */
    updatetime?: string;
    /** 接口地址 */
    url?: string;
    /** 创建人 */
    userid?: number;
  };
}
