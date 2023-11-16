import { Row, Tag } from 'antd';
import { useAssetsContext } from '@/hooks';
import { countAssetStatus, getColorByStatus } from '@/functions';

export const StatusTags = () => {
  const { assetsData } = useAssetsContext();
  const statusCounts = countAssetStatus(assetsData);

  return (
    <Row>
      {Object.entries(statusCounts).map(([status, count]) => (
        <Tag key={status} color={getColorByStatus(status as AssetStatus)}>
          {status} ({count})
        </Tag>
      ))}
    </Row>
  );
};
