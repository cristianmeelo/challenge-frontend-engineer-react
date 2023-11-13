'use client';

import { Assets as AssetsView } from '@/components';
import { useEffect } from 'react';

export default function Assets({ params }: PageProps) {
  const language = params.lang;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/tractian/fake-api/assets');
        const data = await response.json();
console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  return <AssetsView language={language} />;
}
