import React, { useState } from 'react';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

import { TabsBasic } from '../Base/TabsBasic/TabsBasic';

export const Assets: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);

  const [activeTab, setActiveTab] = useState<tabsOptions>('list');

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
