import { Table, Space, Tag, Tooltip, Typography, Button } from 'antd';
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  EditOutlined,
  UserSwitchOutlined 
} from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { useAssetsContext, useUsersContext, useWorkordersContext } from '@/hooks';
import { getAssetName, getUserName } from '@/functions';
import { ChecklistModal } from './ChecklistModal/ChecklistModal';
import { useEffect, useState } from 'react';
import { EditWorkorderModal } from './EditWorkorderModal/EditWorkorderModal';
import { EditAssignedUsersModal } from './EditAssignedUsersModal/EditAssignedUserModal';

export const Workorders: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { workordersData } = useWorkordersContext();
  const { assetsData } = useAssetsContext();
  const { usersData } = useUsersContext();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEditingAssigned, setIsEditingAssigned] = useState<boolean>(false);
  const [isSeeing, setIsSeeing] = useState<boolean>(false);
  const [editingWorkorder, setEditingWorkorder] = useState<Workorder>();

  useEffect(() => {
    console.log(editingWorkorder);
  }, [editingWorkorder]);

  const statusMap: { [key in WorkOrderStatus]: { icon: React.ReactNode; text: string } } = {
    'in progress': {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: 'in progress',
    },
    "completed": { icon: <CheckCircleOutlined style={{ color: 'green' }} />, text: 'completed' },
  };

  const priorityTagMap: { [key: string]: React.ReactNode } = {
    low: <Tag color="blue">Low</Tag>,
    medium: <Tag color="orange">Medium</Tag>,
    high: <Tag color="red">High</Tag>,
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      // sorter: (a: { title: string; }, b: { title: any; }) => a.title.localeCompare(b.title),
      // sortDirections: ['ascend', 'descend'],
      // filters: workordersData.map((workorder) => ({ text: workorder.title, value: workorder.title })),
      // onFilter: (value: any, record: { title: string | any[]; }) => record.title.includes(value),
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
      // filters: Object.keys(statusMap).map((status) => ({ text: statusMap[status].text, value: status })),
      // onFilter: (value: any, record: { status: any; }) => record.status === value,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => priorityTagMap[priority],
      // filters: Object.keys(priorityTagMap).map((priority) => ({ text: priority, value: priority })),
      // onFilter: (value: any, record: { priority: any; }) => record.priority === value,
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
      render: (text: string, record: Workorder) => (
        <Space size="middle" direction="vertical">
          <Button type="primary" icon={<EyeOutlined />} onClick={() => handleSeeClick(record)}>
            Ver Checklist
          </Button>

          <Button type="default" icon={<EditOutlined />} onClick={() => handleEditClick(record)}>
            Editar Ordem de Servico
          </Button>

          <Button type="dashed" danger icon={<UserSwitchOutlined />} onClick={() => handleEditAssignedUserClick(record)}>
            Editar Usuários
          </Button>
        </Space>
      ),
    },
  ];

  const handleEditClick = (workorder: Workorder) => {
    setIsEditing(true);
    setEditingWorkorder({ ...workorder });
  };

  const handleEditAssignedUserClick = (workorder: Workorder) => {
    setIsEditingAssigned(true);
    setEditingWorkorder({ ...workorder });
  };
  const handleEditAssignedUserModalCancel = () => {
    setIsEditingAssigned(false);
  };

  const handleEditAssignedUsersConfirm = () => {
    setIsSeeing(false);
  };
  const handleEditModalCancel = () => {
    setIsEditing(false);
  };

  const handleSeeClick = (workorder: Workorder) => {
    setIsSeeing(true);
    setEditingWorkorder({ ...workorder });
  };

  const handleSeeModalCancel = () => {
    setIsSeeing(false);
  };

  const handleSeeModalConfirm = () => {
    setIsSeeing(false);
  };
 

  const handleEditModalConfirm = (editedTitle: string, editedDescription: string) => {
    // Lógica para salvar as alterações, por exemplo, chamada de API, atualização do estado, etc.
    // Em seguida, feche a modal
    setIsEditing(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_5} />
      <Table dataSource={workordersData} columns={columns} />
      <ChecklistModal
        isOpen={isSeeing}
        title={editingWorkorder?.title}
        okText={'Salvar de vdd'}
        cancelText={'Cancela mesmom pai?'}
        onCancel={handleSeeModalCancel}
        onConfirm={handleSeeModalConfirm}
        workorder={editingWorkorder}
      />

      <EditWorkorderModal
        isOpen={isEditing}
        title={'Editar Ordem'}
        okText={'Salvar de vdd'}
        value={editingWorkorder}
        cancelText={'Cancela mesmom pai?'}
        onCancel={handleEditModalCancel}
        onConfirm={handleEditModalConfirm}
        workorder={editingWorkorder}
        handleAssetMenuClick={(asset: Asset) => {
          setEditingWorkorder((prev) => ({
            ...prev!,
            assetId: asset.id,
          }));
        }}
        onChange={(field: WorkOrderField, value: string) =>
          setEditingWorkorder((prev) => {
            return { ...prev!, [field]: value };
          })
        }
        onStatusChange={(status: WorkOrderStatus) => {
          setEditingWorkorder((prev) => {
            return { ...prev!, status: status };
          });
        }}
        onPriorityChange={(priority: Priority) => {
          setEditingWorkorder((prev) => {
            return { ...prev!, priority: priority };
          });
        }}
        language={language}
      />

      <EditAssignedUsersModal
              isOpen={isEditingAssigned }
              title={`${editingWorkorder?.title} - Assigned users `}
              okText={'Salvar de vdd'}
              cancelText={'Cancela mesmom pai?'}
              onCancel={handleEditAssignedUserModalCancel}
              onConfirm={handleEditAssignedUsersConfirm}
              workorder={editingWorkorder}
      />
    </>
  );
};
