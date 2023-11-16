import { Space } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { EditOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesContext, useUnitsContext } from '@/hooks';
import { generateUnitFilters, getCompanyName, getUnitName } from '@/functions';

export const UsersColumn = (
  language: Locale,
  handleEditClick: (record: User) => void
): ColumnProps<User>[] => {
  const dict = getLanguageUseClient(language);
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();
  const unitsFilters = generateUnitFilters(unitsData);

  console.log(unitsFilters);

  return [
    {
      title: `${dict.table.users.columns.name}`,
      dataIndex: 'name',
      key: 'name',
      sorter: (a: User, b: User) => a.name.localeCompare(b.name),
    },
    {
      title: `${dict.table.users.columns.email}`,
      dataIndex: 'email',
      key: 'email',
      sorter: (a: User, b: User) => a.email.localeCompare(b.email),
    },
    {
      title: `${dict.table.users.columns.company}`,
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: number) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: `${dict.table.users.columns.unit}`,
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: number) => getUnitName({ unitId }, unitsData),
      filters: unitsFilters,
      onFilter: (value: any, record: User) => record.unitId === value,
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
};
