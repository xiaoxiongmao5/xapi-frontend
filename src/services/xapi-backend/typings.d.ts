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
    accesskey?: string;
    gender?: number;
    secretkey?: string;
    useraccount?: string;
    useravatar?: string;
    username?: string;
    userpassword?: string;
    userrole?: string;
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

  type UpdateInterfaceParams = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestheader?: string;
    requestparams?: string;
    responseheader?: string;
    status?: number;
    url?: string;
    userid?: number;
  };
}
