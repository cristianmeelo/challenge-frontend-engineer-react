type EditUsertModalProps = {
  title: string;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  value?: User;
  onChange: (field: string, value: string) => void;
  companies: Company[];
  units: Unit[];
  handleMenuClick: (company: Company) => void;
  language: Locale;
};
