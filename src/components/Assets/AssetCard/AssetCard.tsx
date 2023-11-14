import { useState } from 'react';
import {
  Card,
  Button,
  Avatar,
  Space,
  Tabs,
  Tag,
  Divider,
  Descriptions,
  Badge,
  Progress,
} from 'antd';
import { ClockCircleOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import type { DescriptionsProps } from 'antd';
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesContext, useUnitsContext, useUsersContext } from '@/hooks';
import { getCompanyName, getUnitName } from '@/functions';
import { calculateStrokeColor, getStatusTagColor, renderModelBadge } from '../functions';
import { AssignedUsersList } from '../AssignedUsersList/AssignedUsersList';
import { SpecificationsList } from '../SpecificationsList/SpecificationsList';

const { TabPane } = Tabs;

export const AssetCard = ({ asset, language }: { asset: Asset; language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { unitsData } = useUnitsContext();
  const { companiesData } = useCompaniesContext();
  const formattedLastUptimeAt = moment(asset.metrics.lastUptimeAt).format('HH:mm:ss DD-MM-YYYY');

  const [showDetails, setShowDetails] = useState(false);

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: `${dict.table.assets.columns.company}`,
      children: <p>{getUnitName(asset, unitsData)}</p>,
    },
    {
      key: '2',
      label: `${dict.table.assets.columns.last_uptime_at}`,
      children: (
        <Tag icon={<ClockCircleOutlined />} color="default">
          {formattedLastUptimeAt}
        </Tag>
      ),
    },
    {
      key: '3',
      label: `${dict.table.assets.columns.unit}`,
      children: <p>{getCompanyName(asset, companiesData)}</p>,
    },
    {
      key: '4',
      label: `${dict.table.assets.columns.healthscore}`,
      children: (
        <Progress
          percent={asset.healthscore}
          strokeColor={calculateStrokeColor(asset.healthscore)}
        />
      ),
      span: 3,
    },
    {
      key: '5',
      label: `${dict.table.assets.columns.sensors}`,
      children: <p>{asset.sensors}</p>,
    },
    {
      key: '6',
      label: `${dict.table.assets.columns.status}`,
      children: <Badge color={getStatusTagColor(asset.status)} text={asset.status} />,
      span: 3,
    },
    {
      key: '7',
      label: `${dict.table.assets.columns.total_collects_uptime}`,
      children: <p>{asset.metrics.totalCollectsUptime}</p>,
      span: 2,
    },
    {
      key: '8',
      label: `${dict.table.assets.columns.total_uptime}`,
      children: (
        <Tag icon={<ClockCircleOutlined />} color="default">
          {asset.metrics.totalUptime.toFixed(0)}
        </Tag>
      ),
      span: 2,
    },
    {
      key: '9',
      label: `${dict.table.assets.columns.assigned_user}`,
      children: <AssignedUsersList assignedUserIds={asset.assignedUserIds} usersData={usersData} />,
    },
    {
      key: '10',
      label: `${dict.table.assets.columns.specifications}`,
      children: <SpecificationsList specifications={asset.specifications} language={language} />,
    },
  ];

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
        <Descriptions title="Asset Info" bordered items={items} size={'small'} />
      </Card>
    </Space>
  );
};
