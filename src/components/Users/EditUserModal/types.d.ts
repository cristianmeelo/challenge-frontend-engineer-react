type EditUsertModalProps = {
  isOpen: boolean;
  value?: User;
  title: string;
  okText: string;
  cancelText: string;
  language: Locale;
  onCancel: () => void;
  onOk: () => void;
  onChange: (field: UserField, values: string) => void;
  selectCompany: (company: Company) => void;
  selectUnit: (unit: Unit) => void;
};

type UserField = 'email' | 'name';
