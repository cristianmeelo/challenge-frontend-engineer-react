'use client';

import { Users as UsersView } from '@/components';

export default function Users({ params }: PageProps) {
  const language = params.lang;

  return <UsersView language={language} />;
}
