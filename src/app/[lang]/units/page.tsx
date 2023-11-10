'use client';

import { useEffect } from 'react';
import { Layout } from 'antd';
import { ToastContainer } from 'react-toastify';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesData, useUnitsData } from '@/data';
import { BreadcrumbBasic as Breadcrumb, Units as UnitsView } from '@/components';
import { useRandomAvatar } from '@/hooks';

export default function Units({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { fetchUnitsData, unitsData, setUnitsData, isLoading } = useUnitsData(params.lang);
  const { fetchCompaniesData, companiesData } = useCompaniesData(params.lang);
  const { fetchRandomAvatar, randomAvatar } = useRandomAvatar();

  const { Content } = Layout;

  useEffect(() => {
    fetchUnitsData();
    fetchCompaniesData();
    fetchRandomAvatar();
  }, []);

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb content={dict.sidebar.icon_3} />
      <UnitsView
        unitsData={unitsData}
        companiesData={companiesData}
        randomAvatar={randomAvatar}
        setUnitsData={setUnitsData}
        language={params.lang}
        isLoading={isLoading}
      />
      <ToastContainer />
    </Content>
  );
}
