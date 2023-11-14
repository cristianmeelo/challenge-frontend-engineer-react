import HighchartsReact from 'highcharts-react-official';
import HighchartsTimeline from 'highcharts/modules/timeline';
import Highcharts from 'highcharts';
import moment from 'moment/min/moment-with-locales';



import { getColorByStatus } from '@/functions';

export const TimelineChart = ({ asset, language }: TimelineChartProps) => {
  HighchartsTimeline(Highcharts);

  const mapLanguageToMomentLocale = (language: Locale) => {
    switch (language) {
      case 'en-US':
        return 'en';
      case 'es-MX':
        return 'es';
      default:
        return 'pt';
    }
  };

  const options = {
    chart: {
      type: 'timeline',
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    title: {
      text: 'Health History Timeline',
    },
    subtitle: {
      text: 'Info source: <a href="https://my-json-server.typicode.com/tractian/fake-api/assets">link</a>',
    },
    series: [
      {
        data: asset.healthHistory.map(
          (entry: { status: AssetStatus; timestamp: string }, index: any) => ({
            name: entry.status,
            label: moment(entry.timestamp).locale(mapLanguageToMomentLocale(language)).format('LLL'),
            description: `Status: ${entry.status}`,
            x: index,
            color: getColorByStatus(entry.status),
          })
        ),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
