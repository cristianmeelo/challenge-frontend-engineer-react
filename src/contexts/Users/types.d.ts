/**
 * Properties for the UsersContext provider.
 */
type UsersContextProps = {
  /**
   * Indicates whether users data is currently being loaded.
   */
  isLoading: boolean;

  /**
   * The array of users data.
   */
  usersData: User[];

  /**
   * A function to update the users data using React state.
   */
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>;

  /**
   * A function to handle the update of a specific user in the users data.
   * @param record - The user object to be updated.
   * @param setUsersData - The function to set the updated users data.
   */
  handleUpdateUser: (
    record: User | undefined,
    setUsersData: React.Dispatch<React.SetStateAction<User[]>>
  ) => void;
};
