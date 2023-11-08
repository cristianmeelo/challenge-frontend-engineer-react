'use client'

import { Breadcrumb, Layout, theme } from 'antd'
import { Locale } from '@/config/i18n.config'

export default function Users({ params }: { params: { lang: Locale } }) {
  const { Content } = Layout

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
        <Breadcrumb.Item>View</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>Bill is a cat.</div>
    </Content>
  )
}
