import { getAnalysisTopInterfaceInvoke } from '@/services/xapi-backend/fenxitongjiyonghuyujiekouguanxi';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import ReactECharts from 'echarts-for-react'; // render echarts option.
import { useEffect, useState } from 'react';
const InterfaceAnalysis: React.FC = () => {
  // 存储数据的状态
  const [data, setData] = useState<API.ValidTopNOfInterfaceInvokeCountRow[]>([]);
  // 控制加载状态的状态，默认加载中（true）
  const [loading, setLoading] = useState(true);

  const TOPN = 3;

  // 定义异步加载数据的函数
  const loadData = async (n = TOPN) => {
    // 开始加载数据，设置loading状态为true
    setLoading(true);
    try {
      // 调用接口获取数据
      const res = await getAnalysisTopInterfaceInvoke({ n });
      setData(res.data);
    } catch (error: any) {
      // 请求失败时提示错误信息
      // message.error('请求失败，' + error.message);
    }
    // 数据加载成功或失败后，设置loading状态为false
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []); // 空数组表示仅在组件挂载时执行 useEffect

  const chartData = data.map((item) => {
    return {
      value: item.invokecount,
      name: item.name,
    };
  });

  // EChats图表的配置选项
  const option = {
    title: {
      text: '调用次数最多的接口TOP' + TOPN,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      // orient: 'vertical',  //纵向展示
      left: 'center',
      bottom: 0,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return (
    // 渲染组件内容，可以根据 loading 和 data 进行不同的渲染
    <PageContainer>
      {/* 使用 ReactECharts 组件，传入图表配置 */}
      <ReactECharts
        loadingOption={{
          // 控制加载状态
          showLoading: loading,
        }}
        option={option}
      />
    </PageContainer>
  );
};
export default InterfaceAnalysis;
