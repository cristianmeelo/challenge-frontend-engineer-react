/**
 * Gets the name of the asset associated with an object (work order).
 *
 * @param item - The object containing the asset ID.
 * @param assetsData - An array of asset objects containing asset details.
 * @returns The name of the asset associated with the object, or 'Unknown Asset' if not found.
 *
 * @example
 * const workOrder = { assetId: 1 };
 * const assets = [{ id: 1, name: 'Asset A' }, { id: 2, name: 'Asset B' }];
 * const assetName = getAssetName(workOrder, assets);
 * console.log(assetName);
 * // Output: 'Asset A'
 */
export const getAssetName = (item: { assetId: number }, assetsData: Asset[]): string => {
  /**
   * Finds the asset object in the assetsData array based on the asset ID in the item.
   *
   * @param asset - An asset object from the assetsData array.
   * @returns True if the asset ID matches the item's asset ID, otherwise false.
   */
  const asset = assetsData.find((asset) => asset.id === item.assetId);
  return asset ? asset.name : 'Unknown Asset';
};
