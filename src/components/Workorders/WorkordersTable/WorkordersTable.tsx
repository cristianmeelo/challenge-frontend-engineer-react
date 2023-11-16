import { Table } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useWorkordersContext } from '@/hooks';
import { WorkordersColumn } from '@/components/Workorders';

export const WorkordersTable: React.FC<WorkordersTableProps> = ({
  language,
  handleEditClick,
  handleEditAssignedUserClick,
  handleSeeClick,
}) => {
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
