'use client';

import { SensorChart } from '@/components';

export default function Dashboard({ params }: PageProps) {
  const language = params.lang;

  return <SensorChart language={language} />;
}
