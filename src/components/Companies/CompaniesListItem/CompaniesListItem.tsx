import { List, Avatar, Skeleton } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export const CompanyListItem: React.FC<CompanyListItemProps> = ({
  company,
  onEdit,
  randomAvatar,
  isLoading,
}) => {
  return (
    <>
      <List.Item
        actions={[
          <a key="list-loadmore-edit">
            <EditOutlined onClick={() => onEdit(company)} />
          </a>,
        ]}
      >
        <Skeleton avatar title={false} loading={isLoading} active>
          <List.Item.Meta
            avatar={<Avatar src={randomAvatar} />}
            title={<a href="/">{company.name}</a>}
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem iste architecto nostrum quos voluptatem!"
          />
        </Skeleton>
      </List.Item>
    </>
  );
};
