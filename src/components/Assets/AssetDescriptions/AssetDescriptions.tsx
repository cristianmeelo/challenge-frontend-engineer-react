import { Tag, Descriptions, Badge, Progress } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import type { DescriptionsProps } from 'antd';
import moment from 'moment';

import { getCompanyName, getUnitName, calculateStrokeColor, getColorByStatus } from '@/functions';
import { useUsersContext, useUnitsContext, useCompaniesContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { AssignedUsersList } from '../AssignedUsersList/AssignedUsersList';
import { SpecificationsList } from '../SpecificationsList/SpecificationsList';

export const AssetDescriptions: React.FC<AssetDescriptionsProps> = ({ asset, language }) => {
  const { usersData } = useUsersContext();
  const { unitsData } = useUnitsContext();
  const { companiesData } = useCompaniesContext();
  const formattedLastUptimeAt = moment(asset.metrics.lastUptimeAt).format('HH:mm:ss DD-MM-YYYY');
  const dict = getLanguageUseClient(language);

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: `${dict.table.assets.columns.company}`,
      children: <p>{getUnitName({ unitId: asset.unitId }, unitsData)}</p>,
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
      children: <p>{getCompanyName({ companyId: asset.companyId }, companiesData)}</p>,
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
      children: <Badge color={getColorByStatus(asset.status)} text={asset.status} />,
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

  return (
    <Descriptions title="Asset Info" bordered items={items} size={'small'}>
      <Descriptions.Item label="Custom Label">Custom Value</Descriptions.Item>
    </Descriptions>
  );
};
