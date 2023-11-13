import { Modal, Checkbox, Space, Typography } from 'antd';

export const ChecklistModal: React.FC<ChecklistModalProps> = ({
  isOpen,
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  workorder,
  handleCheckboxChange,
}) => {
  const { Text } = Typography;

  const toggleCheckbox = (taskIndex: number) => {
    const updatedChecklist = (workorder?.checklist || []).map((task, index) => ({
      completed: index === taskIndex ? !task.completed : task.completed,
      task: task.task,
    }));

    const allItemsCompleted = updatedChecklist.every((item) => item.completed);
    const updatedStatus: WorkOrderStatus = allItemsCompleted ? 'completed' : 'in progress';

    handleCheckboxChange(updatedChecklist, updatedStatus);
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel}
      onOk={onConfirm}
    >
      <Space direction="vertical">
        <h3>{workorder?.description}</h3>
        {workorder?.checklist?.map((task, index) => (
          <Checkbox key={index} checked={task.completed} onChange={() => toggleCheckbox(index)}>
            <Text delete={task.completed}>{task.task}</Text>
          </Checkbox>
        ))}
      </Space>
    </Modal>
  );
};
