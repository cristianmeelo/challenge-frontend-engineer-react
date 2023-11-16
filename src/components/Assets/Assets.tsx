import { useState } from 'react';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb, TabsBasic } from '@/components';

export const Assets: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const [activeTab, setActiveTab] = useState<TabsOptions>('list');

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_1} />
      <TabsBasic
        activeTab={activeTab}
        setActiveTab={(key) => setActiveTab(key)}
        language={language}
      />
    </>
  );
};
