import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Col, Row, Tag } from 'antd';
import { green, volcano } from '@ant-design/colors';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext, useUsersContext } from '@/hooks';
import { countTotalAssets } from '@/functions';

export const UserChart: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { assetsData } = useAssetsContext();
  const assetsCount = countTotalAssets(assetsData);

  const totalAssets = Object.values(assetsCount).reduce((acc, count) => acc + count, 0);

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
      <Row>
        <Tag className="custom-tag">
          {dict.chart.user_chart.tag} {totalAssets}
        </Tag>
      </Row>
    </Row>
  );
};
