import { Layout, Typography, theme } from 'antd'

export const Header = () => {
  const { Header } = Layout

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return <Header style={{ paddingLeft: '1rem', background: colorBgContainer }}>APP LINDAO DEMAIS DESENVOLVIDO PELO CRISTIAN</Header>
}
