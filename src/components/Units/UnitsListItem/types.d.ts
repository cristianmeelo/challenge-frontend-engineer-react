type UnitListItemProps = {
  unit: Unit;
  onEdit: (unit: Unit) => void;
  randomAvatar?: string;
  isLoading: boolean;
};