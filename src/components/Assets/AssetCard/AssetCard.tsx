import { useState } from 'react';
import { Card, Button, Avatar, Space, Tabs, Divider } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { renderModelBadge } from '../functions';
import { AssetDescriptions } from '../AssetDescriptions/AssetDescriptions';

const { TabPane } = Tabs;

export const AssetCard = ({ asset, language }: { asset: Asset; language: Locale }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const renderHealthHistoryChart = () => {
    const options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Health History',
      },
      xAxis: {
        categories: asset.healthHistory.map((entry) => entry.timestamp),
      },
      yAxis: {
        title: {
          text: 'Health Score',
        },
      },
      series: [
        {
          name: 'Health Score',
          data: asset.healthHistory.map((entry) =>
            entry.status === 'inAlert' ? 0 : asset.healthscore
          ),
        },
      ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  };

  const renderMetricsChart = () => {
    const options = {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Metrics',
      },
      xAxis: {
        categories: ['Total Uptime', 'Total Collects Uptime'],
      },
      yAxis: {
        title: {
          text: 'Values',
        },
      },
      series: [
        {
          name: 'Value',
          data: [asset.metrics.totalUptime, asset.metrics.totalCollectsUptime],
        },
      ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
  };

  return (
    <Space direction="vertical" size="middle">
      <Card
        title={asset.name}
        extra={
          <Button
            type="link"
            icon={showDetails ? <MinusOutlined /> : <PlusOutlined />}
            onClick={toggleDetails}
            style={{ width: '100%' }}
          >
            {showDetails ? 'See less' : 'See more'}
          </Button>
        }
      >
        {renderModelBadge(asset.model)}
        {asset.image && <Avatar size={200} src={asset.image} alt="Asset Image" shape={'square'} />}
        {showDetails && (
          <Tabs defaultActiveKey="1">
            <TabPane tab="Health History" key="1">
              {renderHealthHistoryChart()}
            </TabPane>
            <TabPane tab="Metrics" key="2">
              {renderMetricsChart()}
            </TabPane>
          </Tabs>
        )}
        <Divider />

        <AssetDescriptions asset={asset} language={language} />
      </Card>
    </Space>
  );
};
