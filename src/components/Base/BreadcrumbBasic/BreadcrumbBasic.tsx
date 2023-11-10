import React from 'react';
import { Breadcrumb, Typography } from 'antd';

export const BreadcrumbBasic = ({ path }: { path: string }) => {
  const { Title } = Typography;
  const { Item } = Breadcrumb;

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Item>
        <Title level={1}>{path}</Title>
      </Item>
    </Breadcrumb>
  );
};
