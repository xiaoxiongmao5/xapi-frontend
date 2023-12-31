export default [
  {
    path: '/',
    name: '主页',
    icon: 'smile',
    component: './Index',
  },
  {
    path: '/interface_info/:id',
    name: '查看接口',
    icon: 'smile',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    path: '/user',
    layout: false,
    name: '登录注册页',
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      // { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },
  // {
  //   path: '/user',
  //   routes: [{ name: '个人信息', path: '/user/info', component: './User/Info' }],
  // },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '接口管理',
        icon: 'table',
        path: '/admin/interface_Info',
        component: './Admin/InterfaceInfo',
      },
      {
        name: '接口分析',
        icon: 'analysis',
        path: '/admin/interface_analysis',
        component: './Admin/InterfaceAnalysis',
      },
      // {
      //   name: '接口分析',
      //   icon: 'table',
      //   path: '/admin/interface_analysis',
      //   component: './Admin/InterfaceAnalysis',
      // },
    ],
  },
  // { icon: 'table', path: '/list', component: './TableList', name: '表格页' },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
