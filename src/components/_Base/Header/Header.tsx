import { Layout, Row, Col } from 'antd';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';

export const Header = ({ params }: { params: { lang: Locale } }) => {
  const { Header } = Layout;

  return (
    <Header className="header">
      <Row justify="end" align="middle">
        <Col>
          <LanguageSwitcher params={params} />
        </Col>
      </Row>
    </Header>
  );
};
