import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { red, yellow, green, blue, purple, volcano } from '@ant-design/colors';
import { useAssetsContext } from '@/hooks';
import { countAssetStatus } from '@/functions';

export const AssetStatusChart = () => {
  const { assetsData } = useAssetsContext();

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      align: 'center',
      verticalAlign: 'middle',
      y: 60,
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        type: 'pie',
        innerSize: '50%',
        data: Object.entries(countAssetStatus(assetsData)).map(([status, count]) => {
          let color;

          switch (status) {
            case 'inOperation':
              color = green[5];
              break;
            case 'inDowntime':
              color = red[5];
              break;
            case 'inAlert':
              color = yellow[5];
              break;
            case 'unplannedStop':
              color = volcano[5];
              break;
            case 'plannedStop':
              color = purple[5];
              break;
            default:
              color = 'gray';
          }

          return {
            name: status,
            y: count,
            color,
          };
        }),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
