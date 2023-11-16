/**
 * Counts the total number of each asset in the given array.
 *
 * @param assetsData - An array of assets.
 * @returns An object with asset IDs as keys and their respective counts as values.
 *
 * @example
 * const assets = [
 *   { id: 1, sensors: ['sensorA', 'sensorB', 'sensorA'] },
 *   { id: 2, sensors: ['sensorB', 'sensorC'] },
 *   { id: 3, sensors: ['sensorA', 'sensorC', 'sensorC'] },
 * ];
 * const assetCounts = countTotalAssets(assets);
 * console.log(assetCounts);
 * // Output: { 1: 1, 2: 1, 3: 1 }
 */
export const countTotalAssets = (assetsData: Asset[]): Record<number, number> => {
  /**
   * An object with asset IDs as keys and their respective counts as values.
   * @type {Record<number, number>}
   */
  const assetCounts: Record<number, number> = {};

  assetsData.forEach((asset: Asset) => {
    const assetId = asset.id;

    if (assetCounts[assetId]) {
      assetCounts[assetId]++;
    } else {
      assetCounts[assetId] = 1;
    }
  });

  return assetCounts;
};
