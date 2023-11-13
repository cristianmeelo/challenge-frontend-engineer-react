import { List } from 'antd';
import { UnitListItem } from '../UnitsListItem/UnitsListItem';
import { useCompaniesContext, useRandomAvatar, useUnitsContext } from '@/hooks';

export const UnitsList: React.FC<unitsListProps> = ({ onEdit }) => {
  const { unitsData, isLoading } = useUnitsContext();
  const { companiesData } = useCompaniesContext();
  const { randomAvatar } = useRandomAvatar();

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={unitsData}
      renderItem={(unit: Unit) => (
        <UnitListItem unit={unit} onEdit={onEdit} randomAvatar={randomAvatar} />
      )}
    />
  );
};
