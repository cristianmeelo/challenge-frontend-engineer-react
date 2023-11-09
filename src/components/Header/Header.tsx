import { Layout, Typography, theme } from 'antd'
import { LanguageSwitcher } from '..'
import { Locale } from '@/config/i18n.config'

export const Header = ({ params }: { params: { lang: Locale } }) => {
  const { Header } = Layout

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header style={{ paddingLeft: '1rem', background: colorBgContainer }}>
      <LanguageSwitcher params={params} />
    </Header>
  )
}
