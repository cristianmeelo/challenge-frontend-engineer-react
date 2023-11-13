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

/**
 * Generates unit filters based on the unique units found in the provided units data.
 * @param unitsData - An array of units containing the 'unit' property.
 * @returns An array of filter options for the 'unit' column.
 */
export const generateUnitFilters = (unitsData: Unit[]): { text: string; value: string }[] => {
  const uniqueUnits = Array.from(new Set(unitsData.map((unit) => unit.name)));

  const unitFilters = uniqueUnits.map((unit) => ({
    text: unit,
    value: unit,
  }));

  return unitFilters;
};
