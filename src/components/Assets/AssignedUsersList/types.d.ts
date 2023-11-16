/**
 * Properties for the AssignedUsersList component or function.
 */
interface AssignedUsersListProps {
  /**
   * An array of user IDs representing the users assigned to a task or item.
   */
  assignedUserIds: number[];

  /**
   * An array of user objects containing details about each user.
   */
  usersData: User[];
}
