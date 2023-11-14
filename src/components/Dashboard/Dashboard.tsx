import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { Col, Divider, Row, Typography } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { SensorChart } from './SensorChart/SensorChart';
import { UserChart } from './UserChart/UserChart';
import { AssetStatusChart } from './StatusChart/StatusChart';
import { StatusTags } from './Badges/Badges';

export const Dashboard: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_6} />
      <Row>
        <Row justify="center" align="top" gutter={[16, 16]}>
          <Col span={12}>
            <Typography.Paragraph style={{ textAlign: 'justify' }}>
              {dict.chart.sensor_chart.description}
            </Typography.Paragraph>
          </Col>
          <Col span={12}>
            <Typography.Paragraph style={{ textAlign: 'justify' }}>
              {dict.chart.user_chart.description}
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row justify="center" align="top" gutter={[16, 16]}>
          <Col span={12}>
            <SensorChart language={language} />
          </Col>
          <Col span={12}>
            <UserChart language={language} />
          </Col>
        </Row>
        <Divider />
        <Row justify="center" align="middle">
          <StatusTags />
        </Row>
        <Row justify="center" align="middle">
          <Col span={12}>
            <AssetStatusChart />
          </Col>
          <Col span={12}>
            <Typography.Paragraph style={{ textAlign: 'justify' }}>
              {dict.chart.status_chart.description}
            </Typography.Paragraph>
          </Col>
        </Row>
      </Row>
    </>
  );
};
