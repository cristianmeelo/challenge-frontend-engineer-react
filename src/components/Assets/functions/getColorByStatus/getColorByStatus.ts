/**
 * Get color based on the status of an asset.
 *
 * @param {AssetStatus} status - The status of the asset (e.g., 'inOperation', 'inDowntime', 'inAlert', 'unplannedStop').
 * @returns {string} - The corresponding color for the given status.
 */
export const getColorByStatus = (status: AssetStatus) => {
  switch (status) {
    case 'inOperation':
      return 'green';
    case 'inDowntime':
      return 'red';
    case 'inAlert':
      return 'yellow';
    case 'unplannedStop':
      return 'gray';
    default:
      return 'blue';
  }
};
