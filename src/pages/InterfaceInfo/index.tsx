import { getInterfaceId } from '@/services/xapi-backend/jiekouxiangguan';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Descriptions, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  // 定义状态和钩子函数
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.ValidXapiInterfaceInfo>();
  // 使用 useParams 钩子函数获取动态路由参数
  const params = useParams();

  if (loading) {
  }

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
      const res = await getInterfaceId({
        id: Number(params.id),
      });
      // 将获取到的接口信息设置到 data 状态中
      setData(res.data);
    } catch (error: any) {
      // 请求失败时提示错误信息
      message.error('请求失败，' + error.message);
    }
    // 数据加载成功或失败后，设置loading状态为false
    setLoading(false);
  };

  useEffect(() => {
    // 页面加载完成后调用加载数据的函数
    loadData();
  }, []);

  return (
    // 使用 antd 的 PageContainer 组件作为页面容器
    <PageContainer title="查看接口文档">
      <Card>
        <Descriptions title={data?.name} column={1}>
          <Descriptions.Item label="接口状态">{data?.status ? '开启' : '关闭'}</Descriptions.Item>
          <Descriptions.Item label="描述">{data?.description}</Descriptions.Item>
          <Descriptions.Item label="请求地址">{data?.url}</Descriptions.Item>
          <Descriptions.Item label="请求方法">{data?.method}</Descriptions.Item>
          <Descriptions.Item label="请求头">{data?.requestheader}</Descriptions.Item>
          <Descriptions.Item label="响应头">{data?.responseheader}</Descriptions.Item>
          <Descriptions.Item label="创建时间">{data?.createtime}</Descriptions.Item>
          <Descriptions.Item label="更新时间">{data?.updatetime}</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};

export default Index;
