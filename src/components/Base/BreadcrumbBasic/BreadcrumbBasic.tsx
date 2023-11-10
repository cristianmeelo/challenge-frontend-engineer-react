import { Breadcrumb, Typography } from 'antd';

export const BreadcrumbBasic: React.FC<BreadcrumbBasicProps> = ({ content }) => {
  const { Title } = Typography;
  const { Item } = Breadcrumb;

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Item>
        <Title level={1}>{content}</Title>
      </Item>
    </Breadcrumb>
  );
};
