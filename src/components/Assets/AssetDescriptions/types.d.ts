interface AssetDescriptionsProps {
  asset: Asset;
  language: Locale;
}

interface AssetDescriptionItem {
  key: string;
  label: string;
  children: React.ReactNode;
  span?: number;
}

interface AssetDescriptionsItems extends Omit<DescriptionsProps, 'items'> {
  items: AssetDescriptionItem[];
}
