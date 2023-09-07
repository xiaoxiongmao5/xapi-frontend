import Footer from '@/components/Footer';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import { postUserLogin, postUserRegister } from '@/services/xapi-backend/yonghuxiangguan';
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, message, Tabs } from 'antd';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';
// const ActionIcons = () => {
//   const langClassName = useEmotionCss(({ token }) => {
//     return {
//       marginLeft: '8px',
//       color: 'rgba(0, 0, 0, 0.2)',
//       fontSize: '24px',
//       verticalAlign: 'middle',
//       cursor: 'pointer',
//       transition: 'color 0.3s',
//       '&:hover': {
//         color: token.colorPrimaryActive,
//       },
//     };
//   });
//   return (
//     <>
//       <AlipayCircleOutlined key="AlipayCircleOutlined" className={langClassName} />
//       <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={langClassName} />
//       <WeiboCircleOutlined key="WeiboCircleOutlined" className={langClassName} />
//     </>
//   );
// };
// const Lang = () => {
//   const langClassName = useEmotionCss(({ token }) => {
//     return {
//       width: 42,
//       height: 42,
//       lineHeight: '42px',
//       position: 'fixed',
//       right: 16,
//       borderRadius: token.borderRadius,
//       ':hover': {
//         backgroundColor: token.colorBgTextHover,
//       },
//     };
//   });

//   return langClassName;
// };
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};
const Login: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const [regType, setRegType] = useState<string>('account');
  // const [hideLoginForm, setHideLoginForm] = useState<boolean>(false);
  // const [hideRegistForm, setHideRegistForm] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<string>('login');
  const { setInitialState } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });
  const handleSubmit = async (values: API.loginUserParams) => {
    try {
      // 登录
      const res = await postUserLogin({
        ...values,
      });
      if (res.result === 0) {
        // 创建一个新的URL对象，并获取当前window.location.href的查询参数
        const urlParams = new URL(window.location.href).searchParams;
        // 定时器出发后，导航到重定向URL，如果没有就导航到根路径【解决：登录页需要点击两次登录才能进入的问题】
        setTimeout(() => {
          // 将用户重定向到'redirect'参数指定的URL，如果'redirect'参数不存在，则重定向到首页'/'
          history.push(urlParams.get('redirect') || '/');
        }, 100);
        // 用登录用户的数据更新初始状态
        setInitialState({
          loginUser: res.data,
        });
        return;
      }
      console.log(res);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      console.log(error);
      // 使用message组件显示错误信息
      message.error(defaultLoginFailureMessage);
    }
  };
  const handleRegist = async (values: API.UserRegisterParams) => {
    if (values.checkUserpassword !== values.userpassword) {
      message.error('两次密码输入不一致，请重新输入！');
      return;
    }
    let len_name = values.useraccount?.length;
    let len_pwd = values.userpassword?.length;
    if (!len_name || len_name < 4 || len_name > 16) {
      message.error('账号长度不符合规定，请重新输入！');
      return;
    }
    if (!len_pwd || len_pwd < 6 || len_pwd > 16) {
      message.error('密码长度不符合规定，请重新输入！');
      return;
    }
    try {
      // 注册
      const res = await postUserRegister({
        ...values,
      });
      if (res.result === 0) {
        message.success('注册成功，请登录！');
        setShowForm('login');
        return;
      }
      message.error(res.msg);
      console.log(res);
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      // 使用message组件显示错误信息
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;
  if (showForm === 'login') {
    return (
      <div className={containerClassName}>
        <Helmet>
          <title>
            {'登录'}- {Settings.title}
          </title>
        </Helmet>
        {/* <Lang /> */}
        <div
          style={{
            flex: '1',
            padding: '32px 0',
          }}
        >
          <LoginForm
            contentStyle={{
              minWidth: 280,
              maxWidth: '75vw',
            }}
            logo={<img alt="logo" src="/wechatphoto.jpeg" />}
            title="X API"
            subTitle={'一个 API 开放调用平台'}
            initialValues={{
              autoLogin: true,
            }}
            // actions={['其他登录方式 :', <ActionIcons key="icons" />]}
            onFinish={async (values) => {
              await handleSubmit(values as API.loginUserParams);
            }}
          >
            <Tabs
              activeKey={type}
              onChange={setType}
              centered
              items={[
                {
                  key: 'account',
                  label: '账户密码登录',
                },
                // {
                //   key: 'mobile',
                //   label: '手机号登录',
                // },
              ]}
            />
            {status === 'error' && loginType === 'account' && (
              <LoginMessage content={'错误的用户名和密码'} />
              // <LoginMessage content={'错误的用户名和密码(admin/ant.design)'} />
            )}
            {/* 账户密码登录 */}
            {type === 'account' && (
              <>
                <ProFormText
                  name="useraccount"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />,
                  }}
                  placeholder={'用户名 (4~16位)'}
                  // placeholder={'用户名: admin or user'}
                  rules={[
                    {
                      required: true,
                      message: '用户名是必填项！',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="userpassword"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  placeholder={'密码 (6~16位)'}
                  // placeholder={'密码: ant.design'}
                  rules={[
                    {
                      required: true,
                      message: '密码是必填项！',
                    },
                  ]}
                />
              </>
            )}
            {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
            {/* 手机号登录 */}
            {type === 'mobile' && (
              <>
                <ProFormText
                  fieldProps={{
                    size: 'large',
                    prefix: <MobileOutlined />,
                  }}
                  name="mobile"
                  placeholder={'请输入手机号！'}
                  rules={[
                    {
                      required: true,
                      message: '手机号是必填项！',
                    },
                    {
                      pattern: /^1\d{10}$/,
                      message: '不合法的手机号！',
                    },
                  ]}
                />
                <ProFormCaptcha
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  captchaProps={{
                    size: 'large',
                  }}
                  placeholder={'请输入验证码！'}
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} ${'秒后重新获取'}`;
                    }
                    return '获取验证码';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '验证码是必填项！',
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    const result = await getFakeCaptcha({
                      phone,
                    });
                    if (!result) {
                      return;
                    }
                    message.success('获取验证码成功！验证码为：1234');
                  }}
                />
              </>
            )}
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
                onClick={() => {
                  setShowForm('regist');
                }}
              >
                没有账号？去注册
              </a>
            </div>
          </LoginForm>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={containerClassName}>
        <Helmet>
          <title>
            {'注册'}- {Settings.title}
          </title>
        </Helmet>
        {/* <Lang /> */}
        <div
          style={{
            flex: '1',
            padding: '32px 0',
          }}
        >
          <LoginForm
            contentStyle={{
              minWidth: 280,
              maxWidth: '75vw',
            }}
            logo={<img alt="logo" src="/wechatphoto.jpeg" />}
            title="X API"
            subTitle={'一个 API 开放调用平台'}
            initialValues={{
              autoLogin: true,
            }}
            // actions={['其他登录方式 :', <ActionIcons key="icons" />]}
            onFinish={async (values) => {
              await handleRegist(values as API.UserRegisterParams);
            }}
          >
            <Tabs
              activeKey={regType}
              onChange={setRegType}
              centered
              items={[
                {
                  key: 'account',
                  label: '账户密码注册',
                },
                // {
                //   key: 'mobile',
                //   label: 'QQ邮箱注册',
                // },
              ]}
            />

            {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}

            {/* 账户密码注册 */}
            {regType === 'account' && (
              <>
                <ProFormText
                  name="useraccount"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />,
                  }}
                  placeholder={'账号 (4~16位)'}
                  rules={[
                    {
                      required: true,
                      message: '账号是必填项！',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="userpassword"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  placeholder={'密码 (6~16位)'}
                  rules={[
                    {
                      required: true,
                      message: '密码是必填项！',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="checkUserpassword"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  placeholder={'确认密码'}
                  rules={[
                    {
                      required: true,
                      message: '确认密码是必填项！',
                    },
                  ]}
                />
              </>
            )}
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <a
                style={{
                  float: 'right',
                  marginBottom: '24px',
                }}
                onClick={() => {
                  setShowForm('login');
                }}
              >
                已有账号，去登陆!
              </a>
            </div>
          </LoginForm>
        </div>
        <Footer />
      </div>
    );
  }
};
export default Login;
