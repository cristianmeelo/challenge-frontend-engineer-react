import { List } from 'antd';
import { UnitListItem } from '../UnitsListItem/UnitsListItem';
import { useRandomAvatar, useUnitsContext } from '@/hooks';

export const UnitsList: React.FC<unitsListProps> = ({ onEdit }) => {
  const { unitsData } = useUnitsContext();
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
