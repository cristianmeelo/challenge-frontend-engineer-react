import { Table, Space, Tag, Tooltip } from 'antd';
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { useAssetsContext, useUsersContext, useWorkordersContext } from '@/hooks';
import { getAssetName, getUserName } from '@/functions';


export const Workorders: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { workordersData } = useWorkordersContext(); 
  const {  assetsData } = useAssetsContext(); 
  const { usersData } = useUsersContext();


  const statusMap: { [key in WorkOrderStatus]: { icon: React.ReactNode; text: string } } = {
    'in progress': { icon: <ClockCircleOutlined style={{ color: 'orange' }} />, text: 'In Progress' },
    completed: { icon: <CheckCircleOutlined style={{ color: 'green' }} />, text: 'Completed' },
  };

  const priorityTagMap: { [key: string]: React.ReactNode } = {
    low: <Tag color="blue">Low</Tag>,
    medium: <Tag color="orange">Medium</Tag>,
    high: <Tag color="red">High</Tag>,
  };

  const columns = [
    {
      title: 'Asset',
      dataIndex: 'assetId', // Substitua pelo nome do campo que contém o ID do ativo em workordersData
      key: 'assetId',
      render: (assetId: string) => getAssetName({ assetId }, assetsData),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: WorkOrderStatus) => (
        <Tooltip title={statusMap[status].text} placement="top">
          <Space>
            {statusMap[status].icon}
            {statusMap[status].text}
          </Space>
        </Tooltip>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => priorityTagMap[priority],
    },
    {
      title: 'Assigned Users',
      dataIndex: 'assignedUserIds',
      key: 'assignedUserIds',
      render: (assignedUserIds: string[]) => (
        <ul>
          {assignedUserIds.map((userId) => (
            <li key={userId}>{getUserName({ userId: userId }, usersData)}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Ações',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          {/* Adicione ações personalizadas aqui, se necessário */}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_5} />
      <Table dataSource={workordersData} columns={columns} />
    </>
  );
};
