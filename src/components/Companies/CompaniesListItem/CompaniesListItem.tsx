import React from 'react';
import { List, Avatar, Skeleton } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface CompanyListItemProps {
  company: Company;
  onEdit: (company: Company) => void;
  onDelete: (company: Company) => void;
  isLoading: boolean;
  randomAvatar?: string;
}

export const CompanyListItem: React.FC<CompanyListItemProps> = ({ company, onEdit, onDelete, isLoading, randomAvatar }) => (
  <List.Item
    actions={[
      <a key="list-loadmore-edit">
        <EditOutlined onClick={() => onEdit(company)} />
        <DeleteOutlined onClick={() => onDelete(company)} style={{ color: 'red', marginLeft: 12 }} />
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
);
