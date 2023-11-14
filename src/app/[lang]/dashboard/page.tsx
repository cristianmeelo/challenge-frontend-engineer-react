'use client';

import { Dashboard as DashboardView } from '@/components';

export default function Dashboard({ params }: PageProps) {
  const language = params.lang;

  return <DashboardView language={language} />;
}
