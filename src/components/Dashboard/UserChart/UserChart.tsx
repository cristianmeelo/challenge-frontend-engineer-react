import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Col, Row } from 'antd';
import { green, volcano } from '@ant-design/colors';

import { useAssetsContext, useUsersContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const UserChart = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);

  const { usersData } = useUsersContext();
  const { assetsData } = useAssetsContext();

  const userDataWithAssetCount = usersData.map((user) => ({
    ...user,
    assignedAssetCount: assetsData.filter(
      (asset) => asset.assignedUserIds && asset.assignedUserIds.includes(user.id)
    ).length,
  }));

  const options = {
    chart: {
      type: 'bar',
      inverted: true,
    },
    title: {
      text: `${dict.chart.user_chart.title}`,
    },
    xAxis: {
      categories: userDataWithAssetCount.map((user) => user.name),
      title: {
        text: `${dict.chart.user_chart.y_axis.a}`,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: `${dict.chart.user_chart.y_axis.b}`,
      },
      tickInterval: 1,
    },
    series: [
      {
        name: `${dict.chart.user_chart.series.a}`,
        data: userDataWithAssetCount.map((user) => ({
          y: user.assignedAssetCount,
          color: user.assignedAssetCount > 3 ? volcano[5] : green[5],
        })),
      },
    ],
  };

  return (
    <Row>
      <Col>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Col>
    </Row>
  );
};
