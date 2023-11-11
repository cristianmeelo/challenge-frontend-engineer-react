'use client';
import { useEffect } from 'react';
import { Layout, Table } from 'antd';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { useUsersData } from '@/data/useUsersData/useUsersData';
import { useCompaniesData, useUnitsData } from '@/data';
import { getCompanyName, getUnitName } from '@/functions';

export default function Users({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { fetchUsersData,usersData } = useUsersData(params.lang);
  const { fetchCompaniesData,companiesData } = useCompaniesData(params.lang);
  const { fetchUnitsData,unitsData } = useUnitsData(params.lang);

  const { Content } = Layout;

  useEffect(() => {
    fetchUsersData();
     fetchCompaniesData();
     fetchUnitsData();
  }, []);


  
  const columns = [
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: string) => getCompanyName({ companyId }, companiesData),
      
    },
    {
      title: 'Unit',
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: string) => getUnitName({ unitId }, unitsData),
    },
  ];

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />
      <Table dataSource={usersData} columns={columns} />
    </>
  );
}
