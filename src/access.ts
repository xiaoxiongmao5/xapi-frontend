/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    // 如果loginUser存在，并且用户角色是'admin'说明用户是管理员
    canAdmin: loginUser?.userrole === 'admin',
  };
}
