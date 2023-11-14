import { useState } from 'react';
import { Space } from 'antd';
import { useAssetsContext } from '@/hooks';

import { AssetCard } from '../AssetCard/AssetCard';
import { SearchBasic } from '@/components/Base/SearchBasic/SearchBasic';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const GridView = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const { assetsData } = useAssetsContext();

  const filteredAssets = assetsData.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Space direction="vertical" align="center" style={{ width: '100%' }}>
      <SearchBasic
        setSearchTerm={(term: React.SetStateAction<string>) => setSearchTerm(term)}
        placeholder={`${dict.input_search.asset}`}
      />

      {filteredAssets.map((asset: Asset) => (
        <AssetCard key={asset.id} asset={asset} language={language} />
      ))}
    </Space>
  );
};
