'use client';

import { useEffect } from 'react';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesData } from '@/data';
import { BreadcrumbBasic as Breadcrumb, Companies as CompaniesView } from '@/components';
import { useRandomAvatar } from '@/hooks';

export default function Companies({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { fetchCompaniesData, companiesData, isLoading, setCompaniesData } = useCompaniesData(params.lang);
  const { fetchRandomAvatar, randomAvatar } = useRandomAvatar();

  const { Content } = Layout;

  useEffect(() => {
    fetchCompaniesData();
    fetchRandomAvatar();
  }, []);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_2} />
      {!isLoading && (
        <CompaniesView data={companiesData} randomAvatar={randomAvatar} setCompaniesData={setCompaniesData} language={params.lang} isLoading={isLoading} />
      )}
      <ToastContainer />
    </>
  );
}
