type EditUnitModalProps = {
  isOpen: boolean;
  value?: Unit;
  title: string;
  okText: string;
  cancelText: string;
  language: Locale;
  onCancel: () => void;
  onOk: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectCompany: (company: Company) => void;
};
