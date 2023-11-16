/**
 * Represents the basic props for a search component.
 */
interface SearchBasicProps {
  /**
   * A function to set the search term.
   * @param term - The search term to set.
   */
  setSearchTerm: (term: string) => void;

  /**
   * The placeholder text to display in the search input.
   */
  placeholder: string;
}
