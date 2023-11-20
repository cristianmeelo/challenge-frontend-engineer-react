/**
 * Properties for the WorkordersContext provider.
 */
type WorkordersContextProps = {
  /**
   * Indicates whether workorders data is currently being loaded.
   */
  isLoading: boolean;

  /**
   * The array of workorders data.
   */
  workordersData: Workorder[];

  /**
   * A function to update the workorders data using React state.
   */
  setWorkordersData: React.Dispatch<React.SetStateAction<Workorder[]>>;

  /**
   * A function to handle the update of a specific workorder in the workorders data.
   * @param record - The workorder object to be updated.
   * @param setWorkordersData - The function to set the updated workorders data.
   */
  handleUpdateWorkorder: (
    record: Workorder | undefined,
    setWorkordersData: React.Dispatch<React.SetStateAction<Workorder[]>>
  ) => void;
};
