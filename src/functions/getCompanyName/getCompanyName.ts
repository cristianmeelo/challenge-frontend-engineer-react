/**
 * Gets the name of the company associated with an object (unit or user).
 *
 * @param item - The object containing the company ID.
 * @param companiesData - An array of company objects containing company details.
 * @returns The name of the company associated with the object, or 'Unknown Company' if not found.
 *
 * @example
 * const user = { companyId: 1 };
 * const companies = [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }];
 * const companyName = getCompanyName(user, companies);
 * console.log(companyName);
 * // Output: 'Company A'
 */
export const getCompanyName = (item: { companyId: number }, companiesData: Company[]): string => {
  /**
   * Finds the company object in the companiesData array based on the company ID in the item.
   *
   * @param company - A company object from the companiesData array.
   * @returns True if the company ID matches the item's company ID, otherwise false.
   */
  const company = companiesData.find((company) => company.id === item.companyId);
  return company ? company.name : 'Unknown Company';
};
