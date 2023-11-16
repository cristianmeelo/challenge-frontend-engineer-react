/**
 * Gets the name of the unit associated with an object (unit or user).
 *
 * @param item - The object containing the unit ID.
 * @param unitsData - An array of unit objects containing unit details.
 * @returns The name of the unit associated with the object, or 'Unknown Unit' if not found.
 *
 * @example
 * const user = { unitId: 1 };
 * const units = [{ id: 1, name: 'Unit A' }, { id: 2, name: 'Unit B' }];
 * const unitName = getUnitName(user, units);
 * console.log(unitName);
 * // Output: 'Unit A'
 */
export const getUnitName = (item: { unitId: number }, unitsData: Unit[]): string => {
  /**
   * Finds the unit object in the unitsData array based on the unit ID in the item.
   *
   * @param unit - A unit object from the unitsData array.
   * @returns True if the unit ID matches the item's unit ID, otherwise false.
   */
  const unit = unitsData.find((unit) => unit.id === item.unitId);
  return unit ? unit.name : 'Unknown Unit';
};
