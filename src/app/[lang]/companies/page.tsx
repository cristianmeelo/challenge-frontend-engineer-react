'use client';

import { useEffect } from 'react';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesData } from '@/data';
import { BreadcrumbBasic as Breadcrumb, Companies as CompaniesView } from '@/components';

export default function Companies({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { fetchCompaniesData, fetchRandomAvatar, companiesData, randomAvatar, isLoading, setCompaniesData } = useCompaniesData(params.lang);

  const { Content } = Layout;

  useEffect(() => {
    fetchCompaniesData();
    fetchRandomAvatar();
  }, []);

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb path={dict.sidebar.icon_2} />
      {!isLoading && <CompaniesView data={companiesData} randomAvatar={randomAvatar} setCompaniesData={setCompaniesData} language={params.lang} />}
      <ToastContainer />
    </Content>
  );
}
