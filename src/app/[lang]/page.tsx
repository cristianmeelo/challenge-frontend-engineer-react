'use client';

import { Layout, Typography, Divider, Space, Watermark } from 'antd';
import { DeploymentUnitOutlined } from '@ant-design/icons';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { StepsBasic } from '@/components';

export default function Home({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);

  const { Content } = Layout;
  const { Title, Paragraph } = Typography;

  const contentStyle: React.CSSProperties = {
    padding: '1.5rem 2rem',
    color: '#001529',
    backgroundColor: '#fff',
  };

  return (

        <Watermark content="Blue Cap 🧢" font={{ color: 'rgba(0, 0, 0, 0.08)' }}>


        <Content style={contentStyle}>
            <Title>{dict.home.title}</Title>
            <Paragraph>{dict.home.description}</Paragraph>
            <Divider>
              <Space>
                <DeploymentUnitOutlined spin={true} />
                {dict.home.divider}
              </Space>
            </Divider>
            <StepsBasic params={params} />

        </Content>
    </Watermark>

  );
}
