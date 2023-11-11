'use client';

import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';

export default function Workorders({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_5} />
      Workorder
      <ToastContainer />
    </>
  );
}
