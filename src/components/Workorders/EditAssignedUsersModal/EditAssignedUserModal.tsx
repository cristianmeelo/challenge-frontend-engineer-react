import React, { useState, useEffect } from 'react';
import { Modal, Checkbox, Space } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useUsersContext } from '@/hooks';

type EditAssignedUserModalProps = {
  title: string | undefined;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  workorder: Workorder | undefined;
  handleCheckboxChange: (checkedValues: CheckboxValueType[]) => void;
};

export const EditAssignedUsersModal: React.FC<EditAssignedUserModalProps> = ({
  isOpen,
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  workorder,
  handleCheckboxChange,
}) => {
  const { usersData } = useUsersContext();

  const existingAssignedUserIds = workorder?.assignedUserIds || [];
  const [selectedUsers, setSelectedUsers] = useState<CheckboxValueType[]>(existingAssignedUserIds);

  const handleCheckboxChangeFn = (checkedValues: CheckboxValueType[]) => {
    setSelectedUsers(checkedValues);
    handleCheckboxChange(checkedValues);
  };

  useEffect(() => {
    if (workorder?.assignedUserIds) {
      setSelectedUsers(workorder.assignedUserIds);
    } else {
      setSelectedUsers([]);
    }
  }, [workorder]);

  const userOptions = usersData.map((user) => ({
    label: user.name,
    value: user.id,
  }));

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
        <Checkbox.Group
          options={userOptions}
          value={selectedUsers}
          onChange={handleCheckboxChangeFn}
        />
      </Space>
    </Modal>
  );
};
