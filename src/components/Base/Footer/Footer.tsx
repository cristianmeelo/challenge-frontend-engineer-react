import { Layout } from 'antd';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const Footer = ({ params }: { params: { lang: Locale } }) => {
  const { Footer } = Layout;
  const dict = getLanguageUseClient(params.lang);

  return <Footer style={{ textAlign: 'end', color: '#334155' }}>{dict.footer.message}</Footer>;
};
