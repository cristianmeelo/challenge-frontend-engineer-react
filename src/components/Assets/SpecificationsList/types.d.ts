/**
 * Properties for the SpecificationsList component or function.
 */
type SpecificationsListProps = {
  /**
   * A record object representing specifications, where keys are specification names and values are their corresponding values.
   */
  specifications: Record<string, any>;

  /**
   * The language/locale setting for displaying specifications.
   */
  language: Locale;
};
