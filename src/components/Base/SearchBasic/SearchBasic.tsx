import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';

export const SearchBasic = ({ setSearchTerm }: { setSearchTerm: (term: string) => void }) => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const { Search } = Input;

  return (
    <Search
      placeholder="Input by name"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
