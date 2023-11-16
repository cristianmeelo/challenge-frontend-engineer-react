/**
 * Counts the total number of each sensor model in the given array of assets.
 *
 * @param assetsData - An array of assets with sensor information.
 * @returns An object with sensor models as keys and their respective counts as values.
 *
 * @example
 * const assets = [
 *   { id: 1, sensors: ['sensorA', 'sensorB', 'sensorA'] },
 *   { id: 2, sensors: ['sensorB', 'sensorC'] },
 *   { id: 3, sensors: ['sensorA', 'sensorC', 'sensorC'] },
 * ];
 * const sensorCounts = countTotalSensors(assets);
 * console.log(sensorCounts);
 * // Output: { sensorA: 3, sensorB: 2, sensorC: 3 }
 */
export const countTotalSensors = (assetsData: Asset[]): Record<string, number> => {
  /**
   * An object with sensor models as keys and their respective counts as values.
   * @type {Record<string, number>}
   */
  const sensorCounts: Record<string, number> = {};

  assetsData.forEach((asset: Asset) => {
    asset.sensors.forEach((sensorModel: string) => {
      if (sensorCounts[sensorModel]) {
        sensorCounts[sensorModel]++;
      } else {
        sensorCounts[sensorModel] = 1;
      }
    });
  });

  return sensorCounts;
};
