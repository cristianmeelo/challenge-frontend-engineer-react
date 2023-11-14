/**
 * Counts the number of occurrences of each asset status in the given array of assets.
 * If a status is not present in an asset, it defaults to 'Unknown'.
 *
 * @param assetsData - An array of assets containing status information.
 * @returns A record object where keys are unique asset statuses, and values are the count of assets with each status.
 */
export const countAssetStatus = (assetsData: Asset[]): Record<string, number> => {
  const statusCounts: Record<string, number> = {};

  assetsData.forEach((asset) => {
    const status = asset.status || 'Unknown';

    statusCounts[status] = (statusCounts[status] || 0) + 1;
  });

  return statusCounts;
};
