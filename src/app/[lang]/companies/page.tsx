'use client';

import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, theme, Typography } from 'antd';
import { faker } from '@faker-js/faker';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { Companies as CompaniesView } from '@/components/Companies/Companies';

export default function Companies({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { Content } = Layout;
  const { Title } = Typography;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomAvatar, setRandomAvatar] = useState<string>();
  const [companiesData, setCompaniesData] = useState<Company[]>([]);

  useEffect(() => {
    async function fetchCompaniesData() {
      const response = await fetch('https://my-json-server.typicode.com/tractian/fake-api/companies');
      const data = await response.json();
      setCompaniesData(data);
      setIsLoading(false);
    }

    fetchCompaniesData();
    setRandomAvatar(
      faker.image.urlLoremFlickr({
        category: 'abstract',
      })
    );
  }, []);

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Title level={1}>{dict.sidebar.icon_2}</Title>
        </Breadcrumb.Item>
      </Breadcrumb>
      {!isLoading && <CompaniesView data={companiesData} randomAvatar={randomAvatar} setCompaniesData={setCompaniesData} />}
    </Content>
  );
}
