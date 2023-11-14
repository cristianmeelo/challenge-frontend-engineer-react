import React, { useState, useEffect } from 'react';
import { Modal, Checkbox, Space } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useUsersContext } from '@/hooks';

export const EditAssignedUsersModal: React.FC<EditAssignedUserModalProps> = ({
  isOpen,
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  data,
  handleCheckboxChange,
}) => {
  const { usersData } = useUsersContext();
  const [selectedUsers, setSelectedUsers] = useState<CheckboxValueType[]>(
    data?.assignedUserIds || []
  );

  const handleCheckboxChangeFn = (checkedValues: CheckboxValueType[]) => {
    setSelectedUsers(checkedValues);
    handleCheckboxChange(checkedValues);
  };

  useEffect(() => {
    setSelectedUsers(data?.assignedUserIds || []);
  }, [data?.assignedUserIds]);

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
