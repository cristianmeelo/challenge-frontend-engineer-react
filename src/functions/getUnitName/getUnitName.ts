/**
 * Gets the name of the unit associated with an object (unit or user).
 *
 * @param {Object} item - The object containing the unit ID.
 * @param {Array} unitsData - An array of unit objects containing unit details.
 * @returns {string} - The name of the unit associated with the object, or 'Unknown Unit' if not found.
 */
export const getUnitName = (item: { unitId: string }, unitsData: Unit[]): string => {
    /**
     * Finds the unit object in the unitsData array based on the unit ID in the item.
     *
     * @param {Object} unit - A unit object from the unitsData array.
     * @returns {boolean} - True if the unit ID matches the item's unit ID, otherwise false.
     */
    const unit = unitsData.find((unit) => unit.id === item.unitId);
    return unit ? unit.name : 'Unknown Unit';
  };
  