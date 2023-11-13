/**
 * Gets the name of the asset associated with an object (workorder).
 *
 * @param {Object} item - The object containing the asset ID.
 * @param {Array} assetsData - An array of asset objects containing asset details.
 * @returns {string} - The name of the asset associated with the object, or 'Unknown Asset' if not found.
 */
export const getAssetName = (item: { assetId: string }, assetsData: Asset[]): string => {
  /**
   * Finds the asset object in the assetsData array based on the asset ID in the item.
   *
   * @param {Object} asset - An asset object from the assetsData array.
   * @returns {boolean} - True if the asset ID matches the item's asset ID, otherwise false.
   */
  const asset = assetsData.find((asset) => asset.id === item.assetId);
  return asset ? asset.name : 'Unknown Asset';
};
