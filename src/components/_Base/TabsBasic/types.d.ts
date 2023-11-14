type TabsBasicProps = {
  activeTab: tabsOptions;
  setActiveTab: (key: tabsOptions) => void;
  language: Locale;
};

type TabData = {
  key: tabsOptions;
  label: ReactNode;
  icon: ReactNode;
  content: ReactNode;
};
