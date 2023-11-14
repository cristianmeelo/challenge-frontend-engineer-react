import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAssetsContext } from '@/hooks';
import { Space, Typography } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const SensorChart = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);

  const { assetsData } = useAssetsContext();

  const countTotalSensors = () => {
    const sensorCounts: Record<string, number> = {};

    assetsData.forEach((asset: AssetSensors) => {
      asset.sensors.forEach((sensorModel: string) => {
        if (sensorCounts[sensorModel]) {
          sensorCounts[sensorModel]++;
        } else {
          sensorCounts[sensorModel] = 1;
        }
      });
    });

    return sensorCounts;
  };

  const sensorData = countTotalSensors();

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: `${dict.chart.sensor_chart.title}`,
    },
    series: [
      {
        name: `${dict.chart.sensor_chart.serie_a}`,
        data: Object.entries(sensorData).map(([name, y]) => ({ name, y })),
        type: 'pie',
      },
    ],
  };

  return (
    <Space direction="vertical">
      <Typography.Paragraph>{dict.chart.sensor_chart.description}</Typography.Paragraph>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Space>
  );
};
