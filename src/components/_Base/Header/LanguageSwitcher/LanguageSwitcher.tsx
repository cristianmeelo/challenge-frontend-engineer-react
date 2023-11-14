'use client';

import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';

import { usePathname } from 'next/navigation';
import { useRouterPush } from '@/hooks';

export const LanguageSwitcher = ({ params }: { params: { lang: Locale } }) => {
  const pathname = usePathname();
  const { navigateTo } = useRouterPush();

  const toggleLanguage = (lng: Locale) => {
    const name = pathname.split('/' + params.lang).join('');
    navigateTo('/' + lng + name);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div onClick={() => toggleLanguage('en-US')}>🇺🇸 EN</div>,
    },
    {
      key: '2',
      label: <div onClick={() => toggleLanguage('pt-BR')}>🇧🇷 BR</div>,
    },
    {
      key: '3',
      label: <div onClick={() => toggleLanguage('es-MX')}>🇲🇽 MX</div>,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Button>
        <TranslationOutlined />
      </Button>
    </Dropdown>
  );
};
