import { green, orange, yellow, volcano, gray } from '@ant-design/colors';

/**
 * Calculates the stroke color based on the healthscore of an asset.
 *
 * @param healthscore - The healthscore value of the asset (a percentage value between 0 and 100).
 * @returns The stroke color determined by the healthscore range.
 *
 * @example
 * const healthscore = 75;
 * const strokeColor = calculateStrokeColor(healthscore);
 * console.log(strokeColor);
 * // Output: '#5BA829' (green[5])
 */
export const calculateStrokeColor = (healthscore: number): string => {
  /**
   * The stroke color determined by the healthscore range.
   * @type {string}
   */
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
