/**
 * Properties for the EditableSpecificationsList component.
 */
type EditableSpecificationsListProps = {
  /**
   * The language/locale setting for the component.
   */
  language: Locale;

  /**
   * The specifications to be displayed and edited.
   */
  specifications: Record<string, any>;

  /**
   * Function called when there is a change in the specifications.
   * @param updatedSpecs - The updated specifications after editing.
   */
  onSpecificationsChange: (updatedSpecs: Record<string, any>) => void;
};
