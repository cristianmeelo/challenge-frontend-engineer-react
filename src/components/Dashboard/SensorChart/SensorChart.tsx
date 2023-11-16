import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Col, Row } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';
import { countTotalSensors } from '@/functions';

export const SensorChart = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { assetsData } = useAssetsContext();
  const sensorData = countTotalSensors(assetsData);

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
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Col>
    </Row>
  );
};
