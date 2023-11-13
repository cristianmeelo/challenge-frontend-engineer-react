'use client';

import { Assets as AssetsView } from '@/components';

export default function Grid({ params }: PageProps) {
  const language = params.lang;

  return (
    
    <AssetsView language={language} />
  );
}
