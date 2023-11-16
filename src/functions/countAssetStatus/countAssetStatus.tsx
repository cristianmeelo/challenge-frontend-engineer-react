/**
 * Counts the number of occurrences of each asset status in the given array of assets.
 * If a status is not present in an asset, it defaults to 'Unknown'.
 *
 * @param assetsData - An array of assets containing status information.
 * @returns A record object where keys are unique asset statuses, and values are the count of assets with each status.
 *
 * @example
 * const assets = [
 *   { id: 1, status: 'inOperation' },
 *   { id: 2, status: 'inDowntime' },
 *   { id: 3, status: 'inOperation' },
 *   { id: 4, status: 'unknownStatus' },
 * ];
 * const statusCounts = countAssetStatus(assets);
 * console.log(statusCounts);
 * // Output: { inOperation: 2, inDowntime: 1, unknownStatus: 1 }
 */
export const countAssetStatus = (assetsData: Asset[]): Record<string, number> => {
  /**
   * A record object where keys are unique asset statuses, and values are the count of assets with each status.
   * @type {Record<string, number>}
   */
  const statusCounts: Record<string, number> = {};

  assetsData.forEach((asset) => {
    const status = asset.status || 'Unknown';

    statusCounts[status] = (statusCounts[status] || 0) + 1;
  });

  return statusCounts;
};
