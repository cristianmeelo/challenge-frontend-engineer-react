import { List } from 'antd';
import { CompanyListItem } from '../CompaniesListItem/CompaniesListItem';

export const CompaniesList: React.FC<CompaniesListProps> = ({ companies, onEdit, randomAvatar, isLoading }) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={companies}
    renderItem={(company: Company) => <CompanyListItem company={company} onEdit={onEdit} randomAvatar={randomAvatar} isLoading={isLoading} />}
  />
);
