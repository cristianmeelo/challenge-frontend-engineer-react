/**
 * Gets the name of the user associated with an object (work order).
 *
 * @param item - The object containing the user ID.
 * @param usersData - An array of user objects containing user details.
 * @returns The name of the user associated with the object, or 'Unknown User' if not found.
 *
 * @example
 * const workOrder = { userId: 1 };
 * const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
 * const userName = getUserName(workOrder, users);
 * console.log(userName);
 * // Output: 'John Doe'
 */
export const getUserName = (item: { userId: number }, usersData: User[]): string => {
  /**
   * Finds the user object in the usersData array based on the user ID in the item.
   *
   * @param user - A user object from the usersData array.
   * @returns True if the user ID matches the item's user ID, otherwise false.
   */
  const user = usersData.find((user) => user.id === item.userId);

  return user ? user.name : 'Unknown User';
};
