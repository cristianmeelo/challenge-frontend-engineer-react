'use client';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';

export default function Workorders({ params }: PageProps) {
  const language = params.lang;
  const dict = getLanguageUseClient(language);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_5} />
    </>
  );
}
