import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';

export const Assets: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_1} />
      Assets
    </>
  );
};
