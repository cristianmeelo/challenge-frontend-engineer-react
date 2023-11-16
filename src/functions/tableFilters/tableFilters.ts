/**
 * Generates model filters based on unique models found in the provided assets data.
 *
 * @param {Asset[]} assetsData - An array of assets containing the 'model' property.
 * @returns {Array<{ text: string, value: string }>} An array of filter options for the 'model' column.
 *
 * @example
 * const assets = [
 *   { id: 1, model: 'Model A' },
 *   { id: 2, model: 'Model B' },
 *    ...
 * ];
 * const modelFilters = generateModelFilters(assets);
 * console.log(modelFilters);
 * // Output: [{ text: 'Model A', value: 'Model A' }, { text: 'Model B', value: 'Model B' }, ...]
 */
export const generateModelFilters = (assetsData: Asset[]): { text: string; value: string }[] => {
  /**
   * Extracts unique models from the provided assets data.
   * @type {string[]}
   */
  const uniqueModels = Array.from(new Set(assetsData.map((asset) => asset.model)));

  /**
   * Maps unique models to filter options.
   * @type {Array<{ text: string, value: string }>}
   */
  const modelFilters = uniqueModels.map((model) => ({
    text: model,
    value: model,
  }));

  return modelFilters;
};

/**
 * Generates unit filters based on unique units found in the provided units data.
 *
 * @param {Unit[]} unitsData - An array of units containing the 'name' and 'id' properties.
 * @returns {Array<{ text: string, value: number }>} An array of filter options for the 'unit' column.
 *
 * @example
 * const units = [
 *   { id: 1, name: 'Unit A' },
 *   { id: 2, name: 'Unit B' },
 *    ...
 * ];
 * const unitFilters = generateUnitFilters(units);
 * console.log(unitFilters);
 * // Output: [{ text: 'Unit A', value: 1 }, { text: 'Unit B', value: 2 }, ...]
 */
export const generateUnitFilters = (unitsData: Unit[]): { text: string; value: number }[] => {
  /**
   * Extracts unique units from the provided units data.
   * @type {string[]}
   */
  const uniqueUnits = Array.from(new Set(unitsData.map((unit) => unit.name)));

  /**
   * Maps unique units to filter options.
   * @type {Array<{ text: string, value: number }>}
   */
  const unitFilters = uniqueUnits.map((unitName) => {
    const unit = unitsData.find((u) => u.name === unitName);
    return {
      text: unitName,
      value: unit ? unit.id : 0, // Use 0 or a default value if id is not available
    };
  });

  return unitFilters;
};
