import { useState } from 'react';
import { Space } from 'antd';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';
import { SearchBasic } from '@/components/_Base/SearchBasic/SearchBasic';
import { AssetCard } from '@/components/Assets';

export const AssetsCards: React.FC<ViewProps> = ({ language }) => {
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
