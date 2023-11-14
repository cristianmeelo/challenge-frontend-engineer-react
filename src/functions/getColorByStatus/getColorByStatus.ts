/**
 * Get color based on the status of an asset.
 *
 * @param {AssetStatus} status - The status of the asset (e.g., 'inOperation', 'inDowntime', 'inAlert', 'unplannedStop').
 * @returns {string} - The corresponding color for the given status.
 */

import { red, green, orange, yellow, volcano, gray, purple } from '@ant-design/colors';

export const getColorByStatus = (status: AssetStatus) => {
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
