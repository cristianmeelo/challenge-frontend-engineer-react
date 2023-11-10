/**
 * Gets the name of the company associated with a unit.
 *
 * @param {Object} unit - The unit object containing the company ID.
 * @param {Array} companiesData - An array of company objects containing company details.
 * @returns {string} - The name of the company associated with the unit, or 'Unknown Company' if not found.
 */

export const getCompanyName = (unit: { companyId: string }, companiesData: Company[]) => {
  /**
   * Finds the company object in the companiesData array based on the company ID in the unit.
   *
   * @param {Object} company - A company object from the companiesData array.
   * @returns {boolean} - True if the company ID matches the unit's company ID, otherwise false.
   */
  const company = companiesData.find((company) => company.id === unit.companyId);
  return company ? company.name : 'Unknown Company';
};
