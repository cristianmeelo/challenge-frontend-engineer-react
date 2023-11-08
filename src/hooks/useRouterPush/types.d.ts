/**
 * Type alias for a function that navigates to a specified path.
 */
type navigateToFunction = (path: string) => void

/**
 * Interface describing the object returned by the `useRouterPush` function.
 */
interface RouterPush {
  /**
   * A function that can be used to navigate to a specific path within the application.
   *
   * @param path - The path to navigate to.
   */
  navigateTo: navigateToFunction
}
