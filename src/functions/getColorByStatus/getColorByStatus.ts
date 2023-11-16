/**
 * Get color based on the status of an asset.
 *
 * @param status - The status of the asset (e.g., 'inOperation', 'inDowntime', 'inAlert', 'unplannedStop').
 * @returns The corresponding color for the given status.
 *
 * @example
 * const assetStatus = 'inOperation';
 * const color = getColorByStatus(assetStatus);
 * console.log(color);
 * // Output: '#87d068' (green[5] from Ant Design color palette)
 */
import { red, green, orange, yellow, volcano, gray, purple } from '@ant-design/colors';

export const getColorByStatus = (status: AssetStatus): string => {
  /**
   * The corresponding color for the given asset status.
   * @type {string}
   */
  switch (status) {
    case 'inOperation':
      return green[5];
    case 'inDowntime':
      return red[5];
    case 'inAlert':
      return yellow[5];
    case 'unplannedStop':
      return volcano[5];
    case 'plannedStop':
      return purple[5];
    default:
      return gray[1];
  }
};
