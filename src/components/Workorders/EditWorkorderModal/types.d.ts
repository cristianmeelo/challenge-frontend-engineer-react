type EditWorkorderModalProps = {
  isOpen: boolean;
  value?: Workorder;
  title: string;
  okText: string;
  cancelText: string;
  language: Locale;
  onCancel: () => void;
  onOk: () => void;
  onChange: (field: WorkOrderField, values: string) => void;
  selectAsset: (asset: Asset) => void;
  selectPriority: (priority: Priority) => void;
};

type WorkOrderField = 'title' | 'description';
