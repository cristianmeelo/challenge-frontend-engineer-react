/**
 * Represents the basic props for a tabs component.
 */
type TabsBasicProps = {
  /**
   * The currently active tab key.
   */
  activeTab: tabsOptions;

  /**
   * A function to set the active tab.
   * @param key - The key of the tab to set as active.
   */
  setActiveTab: (key: tabsOptions) => void;

  /**
   * The language/locale setting for the tabs.
   */
  language: Locale;
};

/**
 * Represents the data structure for a tab.
 */
type TabData = {
  /**
   * The key of the tab.
   */
  key: tabsOptions;

  /**
   * The label to display for the tab.
   */
  label: ReactNode;

  /**
   * The icon to display for the tab.
   */
  icon: ReactNode;

  /**
   * The content to be rendered when the tab is active.
   */
  content: ReactNode;
};

/**
 * Represents the available options for displaying tabs.
 * It can be either 'list' or 'grid'.
 */
type TabsOptions = 'list' | 'grid';
