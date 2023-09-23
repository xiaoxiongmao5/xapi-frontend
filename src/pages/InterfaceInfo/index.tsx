import { postApiInvoke } from '@/services/xapi-backend/jiekoudiaoyongxiangguan';
import {
  getUserinterfaceId,
  postUserinterfaceUpdateLeftcount,
} from '@/services/xapi-backend/yonghuyujiekouguanxi';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Descriptions, Divider, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './index.less';

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  // 定义状态和钩子函数
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.ValidUserInterfaceInfo>();
  // 存储结果变量
  const [invokeRes, setInvokeRes] = useState<any>();
  // 调用加载状态变量，默认为false
  const [invokeLoading, setInitLoading] = useState(false);
  // const [initialRequestParams, setInitialRequestParams] = useState<string | undefined>(
  //   data?.requestparamsexample ? data?.requestparamsexample : '{}',
  // );

  // 使用 useParams 钩子函数获取动态路由参数
  const params = useParams();

  const loadData = async () => {
    // 检查动态路由参数是否存在
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    // 开始加载数据，设置loading状态为true
    setLoading(true);
    try {
      // 发起请求获取接口信息，接受一个包含 id 参数的对象作为参数
      const res = await getUserinterfaceId({
        id: Number(params.id),
      });
      // 将获取到的接口信息设置到 data 状态中
      setData(res.data);
      // setInitialRequestParams(res.data?.requestparamsexample);
    } catch (error: any) {
      // 请求失败时提示错误信息
      // message.error('请求失败，' + error.message);
    }
    // 数据加载成功或失败后，设置loading状态为false
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      // 页面加载完成后调用加载数据的函数
      loadData();
    });
  }, []);

  // // 购买
  // const showAddOrderModal = async () => {
  //   message.error('该功能暂未上线，敬请期待！');
  // };

  // 获取调用体验次数100次
  const getFreeInterface = async () => {
    setLoading(true);
    try {
      const res = await postUserinterfaceUpdateLeftcount({
        interfaceId: data?.id,
        leftNum: 10,
      });
      message.success('成功获取调用次数');
      console.log(res);
    } catch (error: any) {
      // 请求失败时提示错误信息
      // message.error('获取失败请重试，' + error.message);
    }
    setLoading(false);
    loadData();
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   // 获取用户输入的值
  //   const inputValue = e.target.value;
  //   console.log('长度=', inputValue.length);
  //   if (inputValue !== '' && inputValue.length >= 7) {
  //     // 更新 initialRequestParams 状态
  //     setInitialRequestParams(inputValue);
  //   }
  // };

  const onFinish = async (values: any) => {
    // 检查是否存在接口Id
    if (!params.id) {
      message.error('接口不存在');
      return;
    }

    if (data?.leftnum === 0) {
      message.success('接口剩余可调用次数不足，请先获取');
      return true;
    }

    // 在开始调用接口之前，将 invokeLoading 设置为true，表示正在加载中
    setInitLoading(true);
    try {
      // 发起接口调用请求，传入一个对象作为参数，这个对象包含了id 和 values的属性
      // 其中，id 是从 params中获取的，而 values是函数的参数
      const res = await postApiInvoke({
        id: Number(params.id),
        ...values,
      });
      // 将接口调用的结果更新到 invokeRes 状态变量中
      // setInvokeRes(JSON.stringify(res.data, null, 2)); // 使用null和2来格式化JSON字符串
      const resType = typeof res;
      console.log('postApiInvoke typeof res=', resType);

      if (resType === 'string') {
        setInvokeRes(res);
      } else {
        setInvokeRes(JSON.stringify(res, null, 2)); // 使用null和2来格式化JSON字符串
      }

      if (
        resType === 'object' &&
        (res?.result === -1 || res?.result === -2 || res?.result === 4000)
      ) {
        message.error(res?.msg);
      } else {
        message.success('请求成功');
      }
    } catch (error: any) {
      // message.error('操作失败，' + error.message);
    }
    // 无论成功或失败，最后将 invokeLoading 设置为false，表示加载完成
    setInitLoading(false);
    loadData();
    return;
  };

  return (
    // 使用 antd 的 PageContainer 组件作为页面容器
    <PageContainer title="查看接口文档">
      <Card loading={loading}>
        {data ? (
          <div
            className="interfaceinfo-descriptions-container"
            // style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Descriptions title={data.name} column={1}>
              <Descriptions.Item label="接口状态">
                {data.status ? '开启' : '关闭'}
              </Descriptions.Item>
              <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
              <Descriptions.Item label="接口剩余调用次数">{data.leftnum}次</Descriptions.Item>
              <Descriptions.Item label="接口总调用次数">{data.totalnum}次</Descriptions.Item>
              <Descriptions.Item label="创建时间">{data.createtime}</Descriptions.Item>
              <Descriptions.Item label="更新时间">{data.updatetime}</Descriptions.Item>
            </Descriptions>

            <Descriptions title="接口协议信息" column={1}>
              {/* <Descriptions.Item label="域名">{data.host}</Descriptions.Item> */}
              <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
              <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
              <Descriptions.Item label="请求参数">{data.requestparams}</Descriptions.Item>
              <Descriptions.Item label="请求参数示例">
                {data.requestparamsexample}
              </Descriptions.Item>
              <Descriptions.Item label="请求头">{data.requestheader}</Descriptions.Item>
              <Descriptions.Item label="响应头">{data.responseheader}</Descriptions.Item>
            </Descriptions>
          </div>
        ) : (
          <>接口不存在</>
        )}
      </Card>
      <Divider />

      <Card
        title="在线调用"
        loading={loading}
        extra={
          <Button onClick={getFreeInterface}>获取调用次数</Button>
          // data.leftnum === 0 && data.totalnum === 0 ? (
          //   <Button onClick={getFreeInterface}>获取体验调用次数</Button>
          // ) : (
          //   <Button onClick={showAddOrderModal}>购买</Button>
          // )
        }
      >
        {/* 创建一个表单，名称为"invoke"，布局方式为垂直布局，当表单提交时调用 onFinish 方法 */}
        <Form
          name="invoke"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ requestparams: data?.requestparamsexample }}
        >
          {/* 创建一个表单项，用于输入请求参数，表单项名称为 "requestparams" */}
          <Form.Item label="请求参数" name="requestparams">
            <Input.TextArea
              autoSize={{ minRows: 2 }}
              // value={initialRequestParams}
              // onChange={handleInputChange}
            />
          </Form.Item>

          {/* 创建一个包裹项，设置其宽度占据 16 个栅格列 */}
          <Form.Item wrapperCol={{ span: 16 }}>
            {/* 创建调用按钮 */}
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />

      <Card title="返回结果" loading={invokeLoading}>
        <pre>{invokeRes}</pre>
      </Card>
    </PageContainer>
  );
};

export default Index;
