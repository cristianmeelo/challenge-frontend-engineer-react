import { useState } from "react"
import { Layout, Menu } from "antd"
import { ShopOutlined, FileOutlined, DashboardOutlined, TeamOutlined, SubnodeOutlined, SyncOutlined } from "@ant-design/icons"

import { Locale } from "@/config/i18n.config"
import { getLanguageUseClient } from "@/languages/default-languages-use-client"
import { getItem } from "@/functions"

export const Sider = ({ params }: { params: { lang: Locale } }) => {
  const dict = getLanguageUseClient(params.lang)
  const [collapsed, setCollapsed] = useState(false)
  const { Sider } = Layout

  const items: MenuItem[] = [
    getItem("Option 1", "1", <DashboardOutlined />),
    getItem(`${dict.sidebar.icon_2}`, "2", <ShopOutlined />),
    getItem(`${dict.sidebar.icon_3}`, "3", <SubnodeOutlined />),
    getItem(`${dict.sidebar.icon_4}`, "sub1", <TeamOutlined />, [getItem("Team 1", "4"), getItem("Team 2", "5")]),
    getItem(`${dict.sidebar.icon_5}`, "6", <FileOutlined />),
    getItem(`${dict.sidebar.icon_6}`, "sub2", <SyncOutlined />, [
      getItem(`${dict.sidebar.icon_6_1} 🇺🇸`, "7"),
      getItem(`${dict.sidebar.icon_6_2} 🇧🇷`, "8"),
      getItem(`${dict.sidebar.icon_6_3} 🇲🇽`, "9"),
    ]),
  ]

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      {/* <img className="logo" src={BlueLogo} alt="Logo" /> */}
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </Sider>
  )
}
