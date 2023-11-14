import { List, Avatar, Skeleton } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useCompaniesContext } from '@/hooks';

export const CompanyListItem: React.FC<CompanyListItemProps> = ({
  company,
  onEdit,
  randomAvatar,
}) => {
  const { isLoading } = useCompaniesContext();

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
          />
        </Skeleton>
      </List.Item>
    </>
  );
};
