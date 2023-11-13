/**
 * Generates model filters  based on the unique models found in the provided assets data.
 * @param assetsData - An array of assets containing the 'model' property.
 * @returns An array of filter options for the 'model' column.
 */
export const generateModelFilters = (assetsData: Asset[]): { text: string; value: string }[] => {
  const uniqueModels = Array.from(new Set(assetsData.map((asset) => asset.model)));

  const modelFilters = uniqueModels.map((model) => ({
    text: model,
    value: model,
  }));

  return modelFilters;
};
