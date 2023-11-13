'use client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { SensorChart } from '@/components';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export default function Dashboard({ params }: PageProps) {
  const language = params.lang;
  const dict = getLanguageUseClient(params.lang);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_6} />
      <SensorChart language={language} />;
    </>
  );
}
