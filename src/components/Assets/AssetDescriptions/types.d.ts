/**
 * Properties for the AssetDescriptions component.
 */
interface AssetDescriptionsProps {
  /**
   * The asset object containing details to be displayed.
   */
  asset: Asset;

  /**
   * The language/locale setting for rendering content.
   */
  language: Locale;
}

/**
 * Represents an individual description item for an asset.
 */
interface AssetDescriptionItem {
  /**
   * The key or identifier for the description item.
   */
  key: string;

  /**
   * The label or title for the description item.
   */
  label: string;

  /**
   * The content or value of the description item.
   */
  children: React.ReactNode;

  /**
   * Optional: The span (width ratio) for the description item in a grid layout.
   */
  span?: number;
}

/**
 * Extends the Ant Design DescriptionsProps with a customized 'items' property for AssetDescriptions.
 */
interface AssetDescriptionsItems extends Omit<DescriptionsProps, 'items'> {
  /**
   * An array of AssetDescriptionItem objects representing the description items for the asset.
   */
  items: AssetDescriptionItem[];
}
