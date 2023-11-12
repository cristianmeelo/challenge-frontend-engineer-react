import { Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getCompanyName, getUnitName } from '@/functions';

export const userColumns = (
  companiesData: Company[],
  unitsData: Unit[],
  handleEditClick: (record: User) => void,
  editColumnText: string
) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: { name: string | any[] }, b: { name: string | any[] }) =>
      a.name.length - b.name.length,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Company',
    dataIndex: 'companyId',
    key: 'companyId',
    render: (companyId: string) => getCompanyName({ companyId }, companiesData),
  },
  {
    title: 'Unit',
    dataIndex: 'unitId',
    key: 'unitId',
    render: (unitId: string) => getUnitName({ unitId }, unitsData),
    filters: unitsData.map((unit) => ({
      text: unit.name,
      value: unit.id,
    })),
    onFilter: (value: string, record: any) => record.unitId === value,
  },
  {
    title: editColumnText,
    dataIndex: 'edit',
    key: 'edit',
    render: (text: string, record: User) => (
      <Space size="middle">
        <EditOutlined onClick={() => handleEditClick(record)} style={{ cursor: 'pointer' }} />
      </Space>
    ),
  },
];
