import React, { useState, useEffect } from 'react';
import { Modal, Checkbox, Space } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { useWorkordersContext, useUsersContext } from '@/hooks';

type EditAssignedUserModalProps = {
  title: string | undefined;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: (assignedUserIds: CheckboxValueType[]) => void;
  workorder: Workorder | undefined;
};

export const EditAssignedUsersModal: React.FC<EditAssignedUserModalProps> = ({
  isOpen,
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  workorder,
}) => {
  const { workordersData } = useWorkordersContext();
  const { usersData } = useUsersContext();

  const existingAssignedUserIds = workorder?.assignedUserIds || [];
  const [selectedUsers, setSelectedUsers] = useState<CheckboxValueType[]>(existingAssignedUserIds);

  const handleCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    setSelectedUsers(checkedValues);
  };

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
      onOk={() => onConfirm(selectedUsers)}
    >
      <Space direction="vertical">
        <Checkbox.Group
          options={userOptions}
          value={selectedUsers}
          onChange={handleCheckboxChange}
        />
      </Space>
    </Modal>
  );
};
