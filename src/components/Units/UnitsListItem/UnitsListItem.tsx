import { List, Avatar, Skeleton } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export const UnitListItem: React.FC<UnitListItemProps> = ({ unit, onEdit, randomAvatar, isLoading }) => (
  <List.Item
    actions={[
      <a key="list-loadmore-edit">
        <EditOutlined onClick={() => onEdit(unit)} />
      </a>,
    ]}
  >
    <Skeleton avatar title={false} loading={isLoading} active>
      <List.Item.Meta avatar={<Avatar src={randomAvatar} />} title={<a href="/">{unit.name}</a>} description={unit.companyId} />
    </Skeleton>
  </List.Item>
);
