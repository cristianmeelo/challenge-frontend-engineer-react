/**
 * Gets the name of the user associated with an object ( work order).
 *
 * @param {Object} item - The object containing the user ID.
 * @param {Array} userData - An array of user objects containing user details.
 * @returns {string} - The name of the user associated with the object, or 'Unknown User' if not found.
 */
export const getUserName = (item: { userId: number }, usersData: User[]): string => {
  /**
   * Finds the user object in the usersData array based on the user ID in the item.
   *
   * @param {Object} user - A user object from the usersData array.
   * @returns {boolean} - True if the user ID matches the item's user ID, otherwise false.
   */

  const user = usersData.find((user) => user.id === item.userId);

  return user ? user.name : 'Unknown User';
};
