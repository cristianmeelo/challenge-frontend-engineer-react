/**
 * Props for the CompanyListItem component.
 */
type CompanyListItemProps = {
  /**
   * The company object containing information such as ID and name.
   */
  company: Company;

  /**
   * A callback function triggered when the "Edit" action is performed on the company.
   * @param company - The company object being edited.
   */
  onEdit: (company: Company) => void;

  /**
   * A URL or source string for a random avatar associated with the company.
   */
  randomAvatar: string | undefined;
};
