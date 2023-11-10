'use client';

import { useEffect } from 'react';
import { Layout } from 'antd';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesData } from '@/data';
import { BreadcrumbBasic, Companies as CompaniesView } from '@/components';

export default function Companies({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { companiesData, randomAvatar, fetchCompaniesData, handleFetchRandomAvatar, isLoading, setCompaniesData } = useCompaniesData();

  const { Content } = Layout;

  useEffect(() => {
    fetchCompaniesData();
    handleFetchRandomAvatar();
  }, []);

  return (
    <Content style={{ margin: '0 16px' }}>
      <BreadcrumbBasic path={dict.sidebar.icon_2} />
      {!isLoading && <CompaniesView data={companiesData} randomAvatar={randomAvatar} setCompaniesData={setCompaniesData} />}
    </Content>
  );
}
