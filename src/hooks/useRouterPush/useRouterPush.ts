import { useRouter } from 'next/navigation';

export const useRouterPush = (): RouterPush => {
  const router = useRouter();

  const navigateTo: navigateToFunction = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
};
