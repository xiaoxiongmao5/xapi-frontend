import { getInterfacePagelist } from '@/services/xapi-backend/jiekouxiangguan';
import { PageContainer } from '@ant-design/pro-components';
import { List } from 'antd';
import React, { useEffect, useState } from 'react';

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  // 使用 useState 和泛型来定义组件内的状态
  // const [initLoading, setInitLoading] = useState(true);
  // 加载状态
  const [loading, setLoading] = useState(false);
  // 列表数据
  const [list, setList] = useState<API.ValidInterfaceInfo[]>([]);
  // 总数
  const [total, setTotal] = useState<number>(0);

  // 定义异步加载数据的函数
  const loadData = async (current = 1, pageSize = 5) => {
    // 开始加载数据，设置loading状态为true
    setLoading(true);
    try {
      // 调用接口获取数据
      const res = await getInterfacePagelist({ current, pageSize });
      // 将请求返回的数据设置到列表数据状态中
      setList(res?.data?.record ?? []);
      // 将请求返回的总数设置到总数状态中
      setTotal(res?.data?.total ?? 0);
    } catch (error: any) {
      // 请求失败时提示错误信息
      // message.error('请求失败，' + error.message);
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
    <PageContainer title="在线接口开发平台">
      <List
        className="demo-loadmore-list"
        // 设置 loading 属性，表示数据是否正在加载中
        loading={loading}
        itemLayout="horizontal"
        // 将列表数据作为数据源传递给 List 组件
        dataSource={list}
        // 渲染每个列表项
        renderItem={(item) => {
          // 构建列表项的链接地址
          const apiLink = `/interface_info/${item.id}`;
          return (
            // 显式查看链接
            <List.Item
              actions={[
                <a key={item.id} href={apiLink}>
                  查看
                </a>,
              ]}
            >
              <List.Item.Meta
                //列表项标题显示为可点击的链接
                title={<a href={apiLink}>{item.name}</a>}
                // 列表项描述
                description={item.description}
              />
            </List.Item>
          );
        }}
        // 分页配置
        pagination={{
          // 自定义显示总是
          showTotal(total: number) {
            return '总数：' + total;
          },
          // 每页显示条数
          pageSize: 5,
          // 总数，从状态中获取
          total,
          // 切换页面触发的回调函数
          onChange(page, pageSize) {
            // 加载对应页面的数据
            loadData(page, pageSize);
          },
        }}
      />
    </PageContainer>
  );
};

export default Index;
