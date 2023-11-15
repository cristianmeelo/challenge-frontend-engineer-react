import { Table } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useWorkordersContext } from '@/hooks';
import { WorkordersColumn } from '@/components/Workorders';

export const WorkordersTable = ({
  language,
  handleEditClick,
  handleEditAssignedUserClick,
  handleSeeClick,
}: WorkordersTableProps) => {
  const dict = getLanguageUseClient(language);
  const { workordersData } = useWorkordersContext();

  const columns = WorkordersColumn(
    language,
    handleSeeClick,
    handleEditClick,
    handleEditAssignedUserClick
  );

  return (
    <Table
      dataSource={workordersData}
      columns={columns}
      bordered
      title={() => `${dict.table.workorders.title}`}
    />
  );
};
