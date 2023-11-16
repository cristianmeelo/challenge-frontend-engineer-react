import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Badge, Col, Row, Tag } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';
import { countTotalSensors } from '@/functions';

export const SensorChart = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { assetsData } = useAssetsContext();
  const sensorData = countTotalSensors(assetsData);

  const totalSensors = Object.values(sensorData).reduce((acc, count) => acc + count, 0);

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: `${dict.chart.sensor_chart.title}`,
    },
    series: [
      {
        name: `${dict.chart.sensor_chart.series.a}`,
        data: Object.entries(sensorData).map(([name, y]) => ({ name, y })),
        type: 'pie',
      },
    ],
  };

  return (
    <Row>
      <Col>
        <Row>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Row>
        <Row>
          <Tag className="custom-tag">
            {dict.chart.sensor_chart.tag} {totalSensors}
          </Tag>
        </Row>
      </Col>
    </Row>
  );
};
