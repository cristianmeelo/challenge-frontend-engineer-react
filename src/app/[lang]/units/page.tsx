'use client';

import { Units as UnitsView } from '@/components';

export default function Units({ params }: PageProps) {
  const language = params.lang;

  return (
    <>
      <UnitsView language={language} />
    </>
  );
}
