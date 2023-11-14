import { useState } from 'react';
import { Card, Button, Avatar, Space, Tabs, Divider } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { renderModelBadge } from '../functions';
import { AssetDescriptions } from '../AssetDescriptions/AssetDescriptions';
import { TimelineChart } from '../TimelineChart/TimelineChart';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

const { TabPane } = Tabs;

export const AssetCard = ({ asset, language }: { asset: Asset; language: Locale }) => {
  const dict = getLanguageUseClient(language);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
            {showDetails
              ? `${dict.expand_card.asset.see_less}`
              : `${dict.expand_card.asset.see_more}`}
          </Button>
        }
      >
        {renderModelBadge(asset.model)}
        {asset.image && <Avatar size={200} src={asset.image} alt="Asset Image" shape={'square'} />}
        {showDetails && (
          <Tabs defaultActiveKey="1">
            <TabPane tab={`${dict.expand_card.asset.tab}`} key="1">
              <TimelineChart asset={asset} language={language} />
            </TabPane>
          </Tabs>
        )}
        <Divider />
        <AssetDescriptions asset={asset} language={language} />
      </Card>
    </Space>
  );
};
