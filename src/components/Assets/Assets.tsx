import React, {useState} from 'react';
import {  Space, Input, Card, Timeline, Statistic, Avatar, Tag, Descriptions } from 'antd';
import { BreadcrumbBasic as Breadcrumb } from '@/components';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';

export const Assets: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { assetsData } = useAssetsContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAssets = assetsData.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { Search } = Input;


  
  const getColorByStatus = (status: string) => {
    
    switch (status) {
      case 'inOperation':
        return 'green';
      case 'inDowntime':
        return 'red';
      case 'inAlert':
        return 'yellow';
      case 'unplannedStop':
        return 'gray';
      default:
        return 'blue';
    }
  };

  const getStatusTagColor = (status: string) => {
    
    switch (status) {
      case 'inOperation':
        return 'green';
      case 'inDowntime':
        return 'red';
      case 'inAlert':
        return 'yellow';
      case 'unplannedStop':
        return 'gray';
      default:
        return 'blue';
    }
  };

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

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_1} />

      <Space direction="vertical" size="middle" align="center">


      <Search
          placeholder="Input by name"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <Search
          placeholder="Input by name"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
        />


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
