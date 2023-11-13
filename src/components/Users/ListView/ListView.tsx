import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { generateUnitFilters, getCompanyName, getUnitName } from '@/functions';
import {  useCompaniesContext, useUnitsContext, useUsersContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const ListView = ({
  language,
  handleEditClick,
}: {
  language: Locale;
  handleEditClick: (record: User) => void;

}) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();

  const unitsFilters = generateUnitFilters(unitsData);

  const columns: ColumnsType<any> = [
    {
      title: `${dict.table.users.columns.name}`,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: `${dict.table.users.columns.email}`,
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: `${dict.table.users.columns.company}`,
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: string) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: `${dict.table.users.columns.unit}`,
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: string) => getUnitName({ unitId }, unitsData),
      filters: unitsFilters,
      onFilter: (value: any, record: Asset) => record.unitId === value,
    },
    {
      title: `${dict.table.users.columns.action}`,
      dataIndex: 'edit',
      key: 'edit',
      render: (text: string, record: User) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleEditClick(record)} style={{ cursor: 'pointer' }} />
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={usersData}
      columns={columns}
      bordered
      title={() => `${dict.table.users.title}`}
      pagination={{ pageSize: 10 }}
    />
  );
};
