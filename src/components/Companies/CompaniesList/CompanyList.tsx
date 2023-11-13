import { List } from 'antd';
import { CompanyListItem } from '../CompaniesListItem/CompaniesListItem';
import { useCompaniesContext, useRandomAvatar } from '@/hooks';

export const CompaniesList: React.FC<CompaniesListProps> = ({ onEdit }) => {
  const { companiesData } = useCompaniesContext();
  const { randomAvatar } = useRandomAvatar();

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={companiesData}
      renderItem={(company: Company) => (
        <CompanyListItem company={company} onEdit={onEdit} randomAvatar={randomAvatar} />
      )}
    />
  );
};
