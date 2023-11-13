import React, { useState } from 'react';
import { Space, Input, Card, Timeline, Statistic, Avatar, Tag, Descriptions } from 'antd';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';
import { TabsBasic } from '../Base/TabsBasic/TabsBasic';
import { SearchBasic } from '../Base/SearchBasic/SearchBasic';


export const Assets: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { assetsData } = useAssetsContext();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredAssets = assetsData.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const options: Highcharts.Options = {
    title: {
      text: 'My chart',
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3],
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<tabsOptions>('list');

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_1} />
      <TabsBasic
        activeTab={activeTab}
        setActiveTab={(key) => setActiveTab(key)}
        language={language}
      />

      <Space direction="vertical" size="middle" align="center">
        <SearchBasic setSearchTerm={(term) => setSearchTerm(term)} />
      </Space>
    </>
  );
};

// {filteredAssets.map((asset) => (
//   <Card key={asset.id} title={asset.name}

//   >
//     <Avatar src={asset.image} />

//     <Descriptions title="Details">
//       <Descriptions.Item label="Model">{asset.model}</Descriptions.Item>
//       <Descriptions.Item label="Unit ID">{asset.unitId}</Descriptions.Item>
//       {/* Adicione mais itens conforme necessário */}
//     </Descriptions>

//     <Timeline>
//       {asset.healthHistory.map((event, index) => (
//         <Timeline.Item
//           key={index}
//           color={getColorByStatus(event.status)}
//         >
//           {event.status} - {event.timestamp}
//         </Timeline.Item>
//       ))}
//     </Timeline>

//     <Statistic title="Health Score" value={asset.healthscore} />

//     <Tag color={getStatusTagColor(asset.status)}>
//       {asset.status}
//     </Tag>

//     {/* Adicione mais componentes conforme necessário */}
//   </Card>
// ))}

// <HighchartsReact highcharts={Highcharts} options={options} />
