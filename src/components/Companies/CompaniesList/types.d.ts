/**
 * Props for the CompaniesList component.
 */
type CompaniesListProps = {
  /**
   * A callback function triggered when the "Edit" action is performed on a company.
   * @param company - The company object being edited.
   */
  onEdit: (company: Company) => void;
};
