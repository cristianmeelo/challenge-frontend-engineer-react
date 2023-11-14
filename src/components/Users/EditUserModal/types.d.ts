type EditUsertModalProps = {
  title: string;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  value?: User;
  onChange: any; // #TODO
  handleMenuClick: (company: Company) => void;
  handleUnitMenuClicked: (unit: Unit) => void;
  language: Locale;
};

type UserField = 'email' | 'name';
