import { Row, Col, Breadcrumb } from 'antd';

export const BreadcrumbBasic: React.FC<BreadcrumbBasicProps> = ({ content }) => {
  return (
    <Row justify="center" align="middle">
      <Col>
        <Breadcrumb style={{ margin: '16px 0', fontSize: '22px' }} items={[{ title: `${content}` }]} />
      </Col>
    </Row>
  );
};
