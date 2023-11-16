/**
 * Properties for the CompaniesContext provider.
 */
type CompaniesContextProps = {
    /**
     * Indicates whether companies data is currently being loaded.
     */
    isLoading: boolean;
  
    /**
     * The array of companies data.
     */
    companiesData: Company[];
  
    /**
     * A function to update the companies data using React state.
     */
    setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>;
  
    /**
     * A function to handle the update of a specific company in the companies data.
     * @param record - The company object to be updated.
     * @param setCompaniesData - The function to set the updated companies data.
     */
    handleUpdateCompany: (
      record: Company | undefined,
      setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>
    ) => void;
  };
  