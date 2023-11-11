import { List } from 'antd';
import { UnitListItem } from '../UnitsListItem/UnitsListItem';

export const UnitsList: React.FC<unitsListProps> = ({
  units,
  companies,
  onEdit,
  randomAvatar,
  isLoading,
}) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={units}
    renderItem={(unit: Unit) => (
      <UnitListItem
        unit={unit}
        onEdit={onEdit}
        randomAvatar={randomAvatar}
        isLoading={isLoading}
        companies={companies}
      />
    )}
  />
);
