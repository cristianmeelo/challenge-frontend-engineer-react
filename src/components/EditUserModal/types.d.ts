type EditUsertModalProps = {
  title: string;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  value?: Company;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  companies: Company[];
  units: Unit[];
  handleMenuClick: (company: Company) => void;
  language: Locale;
};
