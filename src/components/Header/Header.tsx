import { Layout, theme } from "antd"

export const Header = () => {
  const { Header, Content } = Layout

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return <Header style={{ padding: 0, background: colorBgContainer }} />
}
