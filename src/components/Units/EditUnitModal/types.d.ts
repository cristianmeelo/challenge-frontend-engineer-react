type EditUnitModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  value?: Unit;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  okText: string;
  cancelText: string;
  companies: Company[];
  handleMenuClick: (company: Company) => void;
  language: Locale;
};