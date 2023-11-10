type UnitListItemProps = {
  unit: Unit;
  companies: Company[];
  onEdit: (unit: Unit) => void;
  randomAvatar?: string;
  isLoading: boolean;
};
