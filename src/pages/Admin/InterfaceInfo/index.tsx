import {
  deleteInterface__openAPI__delete,
  getInterfaceList,
  patchInterfaceOffline,
  patchInterfaceOnline,
  postInterfaceRegister,
  putInterfaceUpdate,
} from '@/services/xapi-backend/jiekouxiangguan';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.UpdateInterfaceParams>();
  const [selectedRowsState, setSelectedRows] = useState<API.UpdateInterfaceParams[]>([]);

  /**
   * @en-US Add node
   * @zh-CN 添加节点
   * @param fields
   */
  const handleAdd = async (fields: API.CreateInterfaceParams) => {
    const hide = message.loading('正在添加');
    try {
      await postInterfaceRegister({
        ...fields,
      });
      hide();
      message.success('创建成功');
      actionRef.current?.reload();
      // 创建成功就关闭这个模态框
      handleModalOpen(false);
      return true;
    } catch (error: any) {
      hide();
      // message.error('创建失败，' + error.message);
      return false;
    }
  };

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   *
   * @param fields
   */
  const handleUpdate = async (fields: API.UpdateInterfaceParams) => {
    // 如果没有选中行，则直接返回
    if (!currentRow) {
      return;
    }
    const hide = message.loading('修改中');
    try {
      await putInterfaceUpdate({
        id: currentRow.id,
        ...fields,
      });
      hide();
      message.success('操作成功');
      return true;
    } catch (error: any) {
      hide();
      // message.error('操作失败，' + error.message);
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (record: API.IdRequest) => {
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await deleteInterface__openAPI__delete({
        id: record.id,
      });
      hide();
      message.success('删除成功');
      // 删除成功自动刷新表单
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // message.error('删除失败，' + error.message);
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 发布接口
   *
   * @param selectedRows
   */
  const handleOnline = async (record: API.IdRequest) => {
    const hide = message.loading('发布中');
    if (!record) return true;
    try {
      await patchInterfaceOnline({
        id: record.id,
      });
      hide();
      message.success('操作成功');
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // message.error('操作失败，' + error.message);
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 下线接口
   *
   * @param selectedRows
   */
  const handleOffline = async (record: API.IdRequest) => {
    const hide = message.loading('下线中');
    if (!record) return true;
    try {
      await patchInterfaceOffline({
        id: record.id,
      });
      hide();
      message.success('操作成功');
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      // message.error('操作失败，' + error.message);
      return false;
    }
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'index',
    },
    {
      title: '接口名称',
      dataIndex: 'name',
      valueType: 'text',
      formItemProps: {
        rules: [
          {
            required: true,
            // message: 'hah',
          },
        ],
      },
      // tip: 'The rule name is the unique key',
      // render: (dom, entity) => {
      //   return (
      //     <a
      //       onClick={() => {
      //         setCurrentRow(entity);
      //         setShowDetail(true);
      //       }}
      //     >
      //       {dom}
      //     </a>
      //   );
      // },
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
    },
    {
      title: '请求方法',
      dataIndex: 'method',
      valueType: 'text',
    },
    {
      title: '域名',
      dataIndex: 'host',
      valueType: 'text',
    },
    {
      title: '接口地址',
      dataIndex: 'url',
      valueType: 'text',
    },
    {
      title: '请求参数',
      dataIndex: 'requestparams',
      valueType: 'jsonCode',
    },
    {
      title: '请求参数示例',
      dataIndex: 'requestparamsexample',
      valueType: 'jsonCode',
    },
    {
      title: '请求头',
      dataIndex: 'requestheader',
      valueType: 'jsonCode',
    },
    {
      title: '响应头',
      dataIndex: 'responseheader',
      valueType: 'jsonCode',
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '开启',
          status: 'Processing',
        },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updatetime',
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,
        record.status === 0 ? (
          <a
            key="online"
            onClick={() => {
              handleOnline(record);
            }}
          >
            发布
          </a>
        ) : null,
        record.status === 1 ? (
          <a
            key="offline"
            onClick={() => {
              handleOffline(record);
            }}
          >
            下线
          </a>
        ) : null,
        <Button
          type="text"
          danger
          key="delete"
          onClick={() => {
            handleRemove(record);
          }}
        >
          删除
        </Button>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        //request的触发时机：1 当打开页面或刚加载表格时；2 当手动点击刷新按钮时；3 当点击查询按钮时；
        request={getInterfaceList}
        // request={async (
        //   params,
        //   sort: Record<string, SortOrder>,
        //   filter: Record<string, (string | number)[] | null>,
        // ) => {
        //   const res = await getInterfaceList({
        //     ...params,
        //   });
        //   if (res?.result === 0) {
        //     return {
        //       data: res?.data || [],
        //       success: true,
        //       total: res.total,
        //     };
        //   }
        // }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={'新建规则'}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.RuleListItem);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: '规则名称为必填项',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
      <CreateModal
        columns={columns}
        // 当取消按钮被点击时，设置更新模态框为false以隐藏模态窗口
        onCancel={() => {
          handleModalOpen(false);
        }}
        // 当用户点击提交按钮之后，调用handleAdd函数处理提交的数据，去请求后端添加数据（这里的报错不用管，可能里面组件的属性和外层的不一致）
        onSubmit={(values) => {
          handleAdd(values);
        }}
        // 根据更新窗口的值决定模态窗口是否显示
        visible={createModalOpen}
      ></CreateModal>

      <UpdateModal
        // 要传递columns，不然修改模态框没有表单项
        columns={columns}
        // 当取消按钮被点击时，设置更新模态框为false以隐藏模态窗口
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        // 根据更新窗口的值决定模态窗口是否显示
        visible={updateModalOpen}
        values={currentRow || {}}
      ></UpdateModal>
    </PageContainer>
  );
};
export default TableList;
