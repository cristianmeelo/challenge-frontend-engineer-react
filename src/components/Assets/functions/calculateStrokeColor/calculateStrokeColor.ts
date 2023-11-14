import { red, green, orange, yellow } from '@ant-design/colors';

export const calculateStrokeColor = (healthscore: number) => {
  if (healthscore >= 80) {
    return 'green';
  } else if (healthscore >= 50) {
    return 'yellow';
  } else if (healthscore >= 25) {
    return 'orange';
  } else {
    return 'red';
  }
};
