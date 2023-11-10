import { List, Avatar, Skeleton } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getCompanyName } from '@/functions';

export const UnitListItem = ({ unit, onEdit, randomAvatar, isLoading, companies }: UnitListItemProps) => (
  <List.Item
    actions={[
      <a key="list-loadmore-edit">
        <EditOutlined onClick={() => onEdit(unit)} />
      </a>,
    ]}
  >
    <Skeleton avatar title={false} loading={isLoading} active>
      <List.Item.Meta avatar={<Avatar src={randomAvatar} />} title={<a href="/">{unit.name}</a>} description={getCompanyName(unit, companies)} />
    </Skeleton>
  </List.Item>
);
