import { Space,  Tooltip, Button } from 'antd';
import {
  EyeOutlined,
  EditOutlined,
  UserSwitchOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { ColumnProps } from 'antd/es/table';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { generateWorkorderPdf } from '@/utils/generateWorkorderPDF/generateWorkorderPDF';
import { useAssetsContext, useUsersContext } from '@/hooks';
import { getAssetName, getPriorityTagMap, getUserName, getWorkOrderStatusMap } from '@/functions';


export const WorkordersColumn = (
  language: Locale,
  handleSeeClick: (record: Workorder) => void,
  handleEditClick: (record: Workorder) => void,
  handleEditAssignedUserClick: (record: Workorder) => void
): ColumnProps<Workorder>[] => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { assetsData } = useAssetsContext();
  
  const statusMap = getWorkOrderStatusMap();
  const priorityTagMap = getPriorityTagMap();

  return [
    {
      title: `${dict.table.workorders.columns.title}`,
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: `${dict.table.workorders.columns.description}`,
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: `${dict.table.workorders.columns.asset}`,
      dataIndex: 'assetId',
      key: 'assetId',
      render: (assetId: number) => getAssetName({ assetId }, assetsData),
    },
    {
      title: `${dict.table.workorders.columns.status}`,
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
      title: `${dict.table.workorders.columns.priority}`,
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => priorityTagMap[priority],
    },
    {
      title: `${dict.table.workorders.columns.assigned_users}`,
      dataIndex: 'assignedUserIds',
      key: 'assignedUserIds',
      render: (assignedUserIds: number[]) => (
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
        <Space size="middle" direction="vertical" align="center">
          <Tooltip title="download">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size={'middle'}
              onClick={() => generateWorkorderPdf(record)}
            />
          </Tooltip>

          <Space.Compact direction="vertical">
            <Button type="primary" icon={<EyeOutlined />} onClick={() => handleSeeClick(record)}>
              {dict.table.workorders.buttons.checklist}
            </Button>
            <Button type="default" icon={<EditOutlined />} onClick={() => handleEditClick(record)}>
              {dict.table.workorders.buttons.workorder}
            </Button>
            <Button
              type="dashed"
              danger
              icon={<UserSwitchOutlined />}
              onClick={() => handleEditAssignedUserClick(record)}
            >
              {dict.table.workorders.buttons.users}
            </Button>
          </Space.Compact>
        </Space>
      ),
    },
  ];
};
