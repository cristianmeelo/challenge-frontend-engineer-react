'use client';
import { useEffect } from 'react';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { useUsersData } from '@/data/useUsersData/useUsersData';

export default function Users({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);

  const { fetchUsersData } = useUsersData(params.lang);

  const { Content } = Layout;

  useEffect(() => {
    fetchUsersData();
    // fetchCompaniesData();
    // fetchRandomAvatar();
  }, []);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />
      usuários
      <ToastContainer />
    </>
  );
}
