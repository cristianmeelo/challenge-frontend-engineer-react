import { Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesContext, useUnitsContext } from '@/hooks';
import { generateUnitFilters, getCompanyName, getUnitName } from '@/functions';

export const UsersColumn = (
  language: Locale,
  handleEditClick: (record: User) => void
): Array<any> => {
  const dict = getLanguageUseClient(language);
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();
  const unitsFilters = generateUnitFilters(unitsData);

  return [
    {
      title: `${dict.table.users.columns.name}`,
      dataIndex: 'name',
      key: 'name',
      sorter: (a: { name: number }, b: { name: number }) => a.name - b.name,
    },
    {
      title: `${dict.table.users.columns.email}`,
      dataIndex: 'email',
      key: 'email',
      sorter: (a: { name: number }, b: { name: number }) => a.name - b.name,
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
};
