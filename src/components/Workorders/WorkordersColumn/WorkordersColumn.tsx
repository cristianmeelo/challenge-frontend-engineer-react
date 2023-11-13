import { Space, Tag, Tooltip, Button } from 'antd';
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  EditOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';

import { getAssetName, getUserName } from '@/functions';

export const getStatusMap = (): {
  [key in WorkOrderStatus]: { icon: React.ReactNode; text: string };
} => {
  return {
    'in progress': {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: 'in progress',
    },
    completed: { icon: <CheckCircleOutlined style={{ color: 'green' }} />, text: 'completed' },
  };
};

export const getPriorityTagMap = (): { [key: string]: React.ReactNode } => {
  return {
    low: <Tag color="blue">Low</Tag>,
    medium: <Tag color="orange">Medium</Tag>,
    high: <Tag color="red">High</Tag>,
  };
};

export const getColumns = (
  assetsData: Asset[],
  usersData: User[],
  handleSeeClick: (record: Workorder) => void,
  handleEditClick: (record: Workorder) => void,
  handleEditAssignedUserClick: (record: Workorder) => void
): Array<any> => {
  const statusMap = getStatusMap();
  const priorityTagMap = getPriorityTagMap();

  return [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Asset',
      dataIndex: 'assetId',
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
      key: 'action',
      render: (text: string, record: Workorder) => (
        <Space size="middle" direction="vertical">
          <Button type="primary" icon={<EyeOutlined />} onClick={() => handleSeeClick(record)}>
            Ver Checklist
          </Button>

          <Button type="default" icon={<EditOutlined />} onClick={() => handleEditClick(record)}>
            Editar Ordem de Servico
          </Button>

          <Button
            type="dashed"
            danger
            icon={<UserSwitchOutlined />}
            onClick={() => handleEditAssignedUserClick(record)}
          >
            Editar Usuários
          </Button>
        </Space>
      ),
    },
  ];
};
