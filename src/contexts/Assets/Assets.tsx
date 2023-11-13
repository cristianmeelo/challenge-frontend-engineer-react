import { createContext, useEffect, useState } from 'react';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getAssets, updateAsset } from '@/services/http';

interface AssetsContextProps {
  isLoading: boolean;
  assetsData: Asset[];
  setAssetsData: React.Dispatch<React.SetStateAction<Asset[]>>;
  handleUpdateAsset: (
    record: Asset | undefined,
    setAssetsData: React.Dispatch<React.SetStateAction<Asset[]>>
  ) => void;
}

const initialAssetsContext: AssetsContextProps = {
  isLoading: true,
  assetsData: [],
  setAssetsData: () => {},
  handleUpdateAsset: () => {},
};

export const AssetsContext = createContext<AssetsContextProps>(initialAssetsContext);

export const AssetsProvider = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) => {
  const emptyAssetData: Asset[] = [];

  const dict = getLanguageUseClient(language);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [assetsData, setAssetsData] = useState<Asset[]>(emptyAssetData);

  useEffect(() => {
    fetchAssetsData();
  }, []);

  const fetchAssetsData = async () => {
    try {
      const data = await getAssets();
      setAssetsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUpdateAsset = async (
    record: Asset | undefined,
    setAssetsData: React.Dispatch<React.SetStateAction<Asset[]>>
  ) => {
    // const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);
    // try {
    //   if (record) {
    //     const updatedData = {
    //       assignedUserIds: record.assignedUserIds,
    //       companyId: record.companyId,
    //       healthHistory: record.healthHistory,
    //       healthscore: record.healthscore,
    //       image: record.image,
    //       metrics: record.metrics,
    //       model: record.model,
    //       name: record.name,
    //       sensors: record.sensors,
    //       specifications: record.specifications,
    //       status: record.status,
    //       unitId: record.unitId,
    //     };
    //     const updatedAsset = await updateAsset(record.id, updatedData);
    //     setAssetsData((prevAssets) => {
    //       const updatedAssets = prevAssets.map((asset) => {
    //         if (asset.id === updatedAsset.id) {
    //           return updatedAsset;
    //         } else {
    //           return asset;
    //         }
    //       });
    //       return updatedAssets;
    //     });
    //     ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
    //   }
    // } catch (error) {
    //   ToastError(loadingToast, `${dict.toast_notifications.error}`);
    // }
  };

  const context = {
    fetchAssetsData,
    isLoading,
    assetsData,
    setAssetsData,
    handleUpdateAsset,
  };

  return <AssetsContext.Provider value={context}>{children}</AssetsContext.Provider>;
};
