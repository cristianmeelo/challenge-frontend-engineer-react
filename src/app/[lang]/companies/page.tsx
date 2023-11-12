'use client';

import { Companies as CompaniesView } from '@/components';

export default function Companies({ params }: PageProps) {
  const language = params.lang;

  return (
    <>
      <CompaniesView language={language} />
    </>
  );
}
