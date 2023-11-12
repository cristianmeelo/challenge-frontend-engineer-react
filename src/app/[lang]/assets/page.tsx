'use client';

import { ToastContainer } from 'react-toastify';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';

export default function Assets({ params }: PageProps) {
  const language = params.lang;
  const dict = getLanguageUseClient(language);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_1} />
      Assets
      <ToastContainer />
    </>
  );
}
