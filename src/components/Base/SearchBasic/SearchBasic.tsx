import { Input } from 'antd';

export const SearchBasic: React.FC<SearchBasicProps> = ({ setSearchTerm, placeholder }) => {
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <Input.Search
      placeholder={placeholder}
      allowClear
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};
