type EditUsertModalProps = {
  title: string;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  value?: User;
  onChange: any; // #TODO
  companies: Company[];
  units: Unit[];
  handleMenuClick: (company: Company) => void;
  language: Locale;
};

type UserField = 'email' | 'name';

