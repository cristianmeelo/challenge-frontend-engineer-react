import { Locale } from "@/config/i18n.config";
import { getLanguageServerOnly } from "@/languages/default-languages-server-only";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageServerOnly(params.lang);

  return <main>{dict.title.part1}</main>;
}
