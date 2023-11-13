import { Table, Tag } from 'antd';
import { getStatusTagColor } from '../functions';

import { getCompanyName, getUnitName, getUserName } from '@/functions';
import { useAssetsContext, useCompaniesContext, useUnitsContext, useUsersContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const ListView = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { assetsData } = useAssetsContext();
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();

  const columns = [
    {
      title: `${dict.table.assets.title}`,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: `${dict.table.assets.model}`,
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: `${dict.table.assets.status}`,
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <Tag color={getStatusTagColor(status)}>{status}</Tag>,
    },
    {
      title: `${dict.table.assets.healthscore}`,
      dataIndex: 'healthscore',
      key: 'healthscore',
      render: (healthscore: number) => (
        <span style={{ color: healthscore > 80 ? 'green' : 'red' }}>
          {healthscore}%
        </span>
      ),
    },
    {
      title: `${dict.table.assets.sensors}`,
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
      title: `${dict.table.assets.specifications}`,
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
      title: `${dict.table.assets.company}`,
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: string) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: `${dict.table.assets.unit}`,
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: string) => getUnitName({ unitId }, unitsData),
    },
    {
      title: `${dict.table.assets.assigned_user}`,
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
