/**
 * Gets the name of the company associated with an object (unit or user).
 *
 * @param {Object} item - The object containing the company ID.
 * @param {Array} companiesData - An array of company objects containing company details.
 * @returns {string} - The name of the company associated with the object, or 'Unknown Company' if not found.
 */
export const getCompanyName = (item: { companyId: string }, companiesData: Company[]): string => {
  /**
   * Finds the company object in the companiesData array based on the company ID in the item.
   *
   * @param {Object} company - A company object from the companiesData array.
   * @returns {boolean} - True if the company ID matches the item's company ID, otherwise false.
   */
  const company = companiesData.find((company) => company.id === item.companyId);
  return company ? company.name : 'Unknown Company';
};
