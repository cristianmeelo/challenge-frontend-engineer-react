import { Layout, Row, Col } from 'antd';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';

export const Header = ({ params }: { params: { lang: Locale } }) => {
  const dict = getLanguageUseClient(params.lang);

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
