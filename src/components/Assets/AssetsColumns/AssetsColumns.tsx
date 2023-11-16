import { Button, Space, Tag } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { UserSwitchOutlined, EditOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext, useCompaniesContext, useUnitsContext, useUsersContext } from '@/hooks';
import {
  generateModelFilters,
  getCompanyName,
  getUnitName,
  getUserName,
  calculateStrokeColor,
  getColorByStatus,
} from '@/functions';

export const AssetsColumn = (
  language: Locale,
  handleEditClick: (record: Asset) => void,
  handleEditAssignedUserClick: (record: Asset) => void
): ColumnProps<Asset>[] => {
  const dict = getLanguageUseClient(language);
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();
  const { usersData } = useUsersContext();
  const { assetsData } = useAssetsContext();

  const modelFilters = generateModelFilters(assetsData);

  return [
    {
      title: `${dict.table.assets.title}`,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: `${dict.table.assets.columns.model}`,
      dataIndex: 'model',
      key: 'model',
      filters: modelFilters,
      onFilter: (value: any, record: Asset) => record.model === value,
    },
    {
      title: `${dict.table.assets.columns.status}`,
      dataIndex: 'status',
      key: 'status',
      render: (status: AssetStatus) => <Tag color={getColorByStatus(status)}>{status}</Tag>,
      filters: [
        { text: 'InOperation', value: 'inOperation' },
        { text: 'InDowntime', value: 'inDowntime' },
        { text: 'InAlert', value: 'inAlert' },
        { text: 'UnplannedStop', value: 'unplannedStop' },
        { text: 'PlannedStop', value: 'plannedStop' },
      ],
      onFilter: (value: any, record: Asset) => record.status === value,
    },
    {
      title: `${dict.table.assets.columns.healthscore}`,
      dataIndex: 'healthscore',
      key: 'healthscore',
      render: (healthscore: number) => (
        <span style={{ color: calculateStrokeColor(healthscore) }}>{healthscore}%</span>
      ),
    },
    {
      title: `${dict.table.assets.columns.sensors}`,
      dataIndex: 'sensors',
      key: 'sensors',
      render: (sensors: string[]) => (
        <>
          {sensors.map((sensor) => (
            <Tag key={sensor} color="black">
              {sensor}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: `${dict.table.assets.columns.company}`,
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: number) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: `${dict.table.assets.columns.unit}`,
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: number) => getUnitName({ unitId }, unitsData),
      sorter: (a: { unitId: number }, b: { unitId: number }) => a.unitId - b.unitId,
    },
    {
      title: `${dict.table.assets.columns.assigned_user}`,
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
      render: (text: string, record: Asset) => (
        <Space size="middle" direction="vertical" align="center">
          <Space.Compact direction="vertical">
            <Button type="default" icon={<EditOutlined />} onClick={() => handleEditClick(record)}>
              {dict.table.assets.buttons.workorder}
            </Button>
            <Button
              type="dashed"
              danger
              icon={<UserSwitchOutlined />}
              onClick={() => handleEditAssignedUserClick(record)}
            >
              {dict.table.assets.buttons.users}
            </Button>
          </Space.Compact>
        </Space>
      ),
    },
  ];
};
