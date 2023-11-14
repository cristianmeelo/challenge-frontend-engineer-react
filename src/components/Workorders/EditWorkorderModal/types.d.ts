type EditWorkorderModalProps = {
  title: string;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: (editedTitle: string, editedDescription: string) => void;
  value?: Workorder;
  onChange: any; // #TODO
  workorder: Workorder | undefined;
  handleAssetMenuClick: (asset: Asset) => void;
  onPriorityChange: (priority: Priority) => void;
  language: Locale;
};

type WorkOrderField = 'title' | 'description';
