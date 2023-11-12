'use client';

import { Workorders as WorkordersView } from '@/components';

export default function Workorders({ params }: PageProps) {
  const language = params.lang;

  return <WorkordersView language={language} />;
}
