import { BreadcrumbBasic as Breadcrumb } from '@/components';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { SensorChart } from './SensorChart/SensorChart';

export const Dashboard: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_6} />
      <SensorChart language={language} />;
    </>
  );
};
