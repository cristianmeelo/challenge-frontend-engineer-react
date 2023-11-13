import React from 'react';
import { Modal, Checkbox, Space } from 'antd';

import { useWorkordersContext } from '@/hooks';

type ChecklistModalProps = {
  title: string | undefined;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  workorder: Workorder | undefined;
};

export const ChecklistModal: React.FC<ChecklistModalProps> = ({
  isOpen,
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  workorder,
}) => {
  const { workordersData } = useWorkordersContext();

  const handleCheckboxChange = (taskIndex: number) => {
    // Implemente a lógica para alterar o estado da tarefa no checklist
    // Isso pode envolver a atualização do estado local ou chamadas de API
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
          <Checkbox
            key={index}
            checked={task.completed}
            onChange={() => handleCheckboxChange(index)}
          >
            {task.task}
          </Checkbox>
        ))}
      </Space>
    </Modal>
  );
};
