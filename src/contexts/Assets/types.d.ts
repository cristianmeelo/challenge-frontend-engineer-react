/**
 * Properties for the AssetsContext provider.
 */
type AssetsContextProps = {
    /**
     * Indicates whether assets data is currently being loaded.
     */
    isLoading: boolean;
  
    /**
     * The array of assets data.
     */
    assetsData: Asset[];
  
    /**
     * A function to update the assets data using React state.
     */
    setAssetsData: React.Dispatch<React.SetStateAction<Asset[]>>;
  
    /**
     * A function to handle the update of a specific asset in the assets data.
     * @param record - The asset object to be updated.
     * @param setAssetsData - The function to set the updated assets data.
     */
    handleUpdateAsset: (
      record: Asset | undefined,
      setAssetsData: React.Dispatch<React.SetStateAction<Asset[]>>
    ) => void;
  };
  