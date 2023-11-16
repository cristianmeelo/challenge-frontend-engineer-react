/**
 * Properties for the UnitsContext provider.
 */
type UnitsContextProps = {
    /**
     * Indicates whether units data is currently being loaded.
     */
    isLoading: boolean;
  
    /**
     * The array of units data.
     */
    unitsData: Unit[];
  
    /**
     * A function to update the units data using React state.
     */
    setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>;
  
    /**
     * A function to handle the update of a specific unit in the units data.
     * @param record - The unit object to be updated.
     * @param setUnitsData - The function to set the updated units data.
     */
    handleUpdateUnit: (
      record: Unit | undefined,
      setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>
    ) => void;
  };
  