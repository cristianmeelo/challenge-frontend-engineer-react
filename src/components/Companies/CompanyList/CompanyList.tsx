import React from 'react';
import { List } from 'antd';
import { CompanyListItem } from '../CompaniesListItem/CompaniesListItem';

interface CompanyListProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  onDelete: (company: Company) => void;
  isLoading: boolean;
  randomAvatar?: string;
}

export const CompanyList: React.FC<CompanyListProps> = ({ companies, onEdit, onDelete, isLoading, randomAvatar }) => (
  <List
    className="demo-loadmore-list"
    loading={isLoading}
    itemLayout="horizontal"
    dataSource={companies}
    renderItem={(company: Company) => (
      <CompanyListItem company={company} onEdit={onEdit} onDelete={onDelete} isLoading={isLoading} randomAvatar={randomAvatar} />
    )}
  />
);
