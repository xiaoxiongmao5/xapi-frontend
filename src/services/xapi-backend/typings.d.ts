declare namespace API {
  type CreateUserParamsJSON = {
    accesskey?: string;
    gender?: number;
    secretkey?: string;
    useraccount?: string;
    useravatar?: string;
    username?: string;
    userpassword?: string;
    userrole?: string;
  };

  type getLogoutParams = {
    /** 账户名称 */
    useraccount: string;
  };
}
