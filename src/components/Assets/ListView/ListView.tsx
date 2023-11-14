import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getStatusTagColor } from '../functions';
import { generateModelFilters, getCompanyName, getUnitName, getUserName } from '@/functions';
import { useAssetsContext, useCompaniesContext, useUnitsContext, useUsersContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const ListView = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { assetsData } = useAssetsContext();
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();

  const modelFilters = generateModelFilters(assetsData);

  const columns: ColumnsType<any> = [
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
      render: (status: AssetStatus) => <Tag color={getStatusTagColor(status)}>{status}</Tag>,
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
        <span style={{ color: healthscore > 80 ? 'green' : 'red' }}>{healthscore}%</span>
      ),
    },
    {
      title: `${dict.table.assets.columns.sensors}`,
      dataIndex: 'sensors',
      key: 'sensors',
      render: (sensors: string[]) => (
        <>
          {sensors.map((sensor) => (
            <Tag key={sensor}>{sensor}</Tag>
          ))}
        </>
      ),
    },
    {
      title: `${dict.table.assets.columns.specifications}`,
      dataIndex: 'specifications',
      key: 'specifications',
      render: (specifications: any) => (
        <>
          {Object.keys(specifications).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {specifications[key]}
            </p>
          ))}
        </>
      ),
    },
    {
      title: `${dict.table.assets.columns.company}`,
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: string) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: `${dict.table.assets.columns.unit}`,
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: string) => getUnitName({ unitId }, unitsData),
      sorter: (a, b) => a.unitId - b.unitId,
    },
    {
      title: `${dict.table.assets.columns.assigned_user}`,
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
  ];

  return (
    <Table
      dataSource={assetsData}
      columns={columns}
      bordered
      title={() => `${dict.table.workorders.title}`}
      pagination={{ pageSize: 10 }}
    />
  );
};
