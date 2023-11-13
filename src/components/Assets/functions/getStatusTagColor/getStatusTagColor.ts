/**
 * Get the color for a status tag based on the provided asset status.
 *
 * @param {string} status - The status of the asset (e.g., 'inOperation', 'inDowntime', 'inAlert', 'unplannedStop').
 * @returns {string} - The corresponding color for the given status tag.
 */
export const getStatusTagColor = (status: string) => {
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
