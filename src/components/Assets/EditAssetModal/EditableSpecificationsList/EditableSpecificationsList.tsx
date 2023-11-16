import { useEffect, useState } from 'react';
import { Space, Input, Button } from 'antd';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const EditableSpecificationsList: React.FC<EditableSpecificationsListProps> = ({
  language,
  specifications,
  onSpecificationsChange,
}) => {
  const dict = getLanguageUseClient(language);
  const [editingKey, setEditingKey] = useState<string | null>(null);

  const handleEdit = (key: string) => {
    setEditingKey(key);
  };

  const isEditing = (key: string) => key === editingKey;

  const handleSave = () => {
    setEditingKey(null);
  };

  const handleCancel = () => {
    setEditingKey(null);
  };

  useEffect(() => {
    setEditingKey(null);
  }, []);

  return (
    <Space direction="vertical" size={16}>
      {Object.entries(specifications).map(([key, value]) => (
        <div key={key}>
          {isEditing(key) ? (
            <Space>
              <Input
                value={value}
                onChange={(e) =>
                  onSpecificationsChange({ ...specifications, [key]: e.target.value })
                }
              />
              <Button onClick={handleSave}>{dict.button.save}</Button>
              <Button onClick={handleCancel}>{dict.button.cancel}</Button>
            </Space>
          ) : (
            <Space>
              <span>
                {key}: {value}
              </span>
              <Button onClick={() => handleEdit(key)}>{dict.button.edit}</Button>
            </Space>
          )}
        </div>
      ))}
    </Space>
  );
};
