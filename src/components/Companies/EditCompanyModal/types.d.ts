interface EditCompanyModalProps {
  isOpen: boolean;
  value?: Company;
  title: string;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onOk: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
