import { useRouter } from 'next/navigation'

export const useRouterPush = (): RouterPush => {
  const navigator = useRouter()

  const navigateTo: navigateToFunction = (path: string) => {
    navigator.push(path)
  }

  return { navigateTo }
}
