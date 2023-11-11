'use client';

import { useEffect } from 'react';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { useRandomAvatar } from '@/hooks';

export default function Assets({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_1} />
      Assets
      <ToastContainer />
    </>
  );
}
