interface unitsListProps {
  units: Unit[];
  onEdit: (unit: Unit) => void;
  randomAvatar?: string;
  isLoading: boolean;
}
