import { Layout } from "antd"

import { Logo } from "@/components/Logo/Logo"
import { Locale } from "@/config/i18n.config"
import { getLanguageUseClient } from "@/languages/default-languages-use-client"

export const Footer = ({ params }: { params: { lang: Locale } }) => {
  const { Footer } = Layout
  const dict = getLanguageUseClient(params.lang)

  return (
    <Footer style={{ textAlign: "end", color: "#334155" }}>
      <Logo /> &nbsp;
      {dict.footer.message}
    </Footer>
  )
}
