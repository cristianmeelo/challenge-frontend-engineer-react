import { red, green, orange, yellow, volcano, gray } from '@ant-design/colors';

export const calculateStrokeColor = (healthscore: number) => {
  if (healthscore >= 80) {
    return green[5];
  } else if (healthscore >= 50) {
    return yellow[5];
  } else if (healthscore >= 25) {
    return volcano[5];
  } else {
    return gray[1];
  }
};
