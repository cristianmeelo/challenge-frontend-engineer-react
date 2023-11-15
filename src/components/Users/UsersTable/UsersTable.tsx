import { Table } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { UsersColumn } from '@/components/Users';
import { useUsersContext } from '@/hooks';

export const UsersTable = ({ language, handleEditClick }: UsersTableProps) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();

  const columns = UsersColumn(language, handleEditClick);

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
