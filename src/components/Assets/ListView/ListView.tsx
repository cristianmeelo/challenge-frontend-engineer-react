import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useAssetsContext, useCompaniesContext, useUnitsContext, useUsersContext } from '@/hooks';
import {
  generateModelFilters,
  getCompanyName,
  getUnitName,
  getUserName,
  calculateStrokeColor,
  getColorByStatus,
} from '@/functions';
import { EyeOutlined, EditOutlined, UserSwitchOutlined, DownloadOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { EditAssignedUsersModal } from '@/components/_Shared/EditAssignedUsersModal/EditAssignedUserModal';

export const ListView = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { usersData } = useUsersContext();
  const { assetsData, handleUpdateAsset, setAssetsData } = useAssetsContext();
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();

  const modelFilters = generateModelFilters(assetsData);

  const [isEditingAssigned, setIsEditingAssigned] = useState<boolean>(false);
  const [editingAsset, setEditingAsset] = useState<Asset>();

  const columns: ColumnsType<any> = [
    {
      title: `${dict.table.assets.title}`,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: `${dict.table.assets.columns.model}`,
      dataIndex: 'model',
      key: 'model',
      filters: modelFilters,
      onFilter: (value: any, record: Asset) => record.model === value,
    },
    {
      title: `${dict.table.assets.columns.status}`,
      dataIndex: 'status',
      key: 'status',
      render: (status: AssetStatus) => <Tag color={getColorByStatus(status)}>{status}</Tag>,
      filters: [
        { text: 'InOperation', value: 'inOperation' },
        { text: 'InDowntime', value: 'inDowntime' },
        { text: 'InAlert', value: 'inAlert' },
        { text: 'UnplannedStop', value: 'unplannedStop' },
        { text: 'PlannedStop', value: 'plannedStop' },
      ],
      onFilter: (value: any, record: Asset) => record.status === value,
    },
    {
      title: `${dict.table.assets.columns.healthscore}`,
      dataIndex: 'healthscore',
      key: 'healthscore',
      render: (healthscore: number) => (
        <span style={{ color: calculateStrokeColor(healthscore) }}>{healthscore}%</span>
      ),
    },
    {
      title: `${dict.table.assets.columns.sensors}`,
      dataIndex: 'sensors',
      key: 'sensors',
      render: (sensors: string[]) => (
        <>
          {sensors.map((sensor) => (
            <Tag key={sensor}>{sensor}</Tag>
          ))}
        </>
      ),
    },
    {
      title: `${dict.table.assets.columns.specifications}`,
      dataIndex: 'specifications',
      key: 'specifications',
      render: (specifications: any) => (
        <>
          {Object.keys(specifications).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {specifications[key]}
            </p>
          ))}
        </>
      ),
    },
    {
      title: `${dict.table.assets.columns.company}`,
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: number) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: `${dict.table.assets.columns.unit}`,
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: number) => getUnitName({ unitId }, unitsData),
      sorter: (a, b) => a.unitId - b.unitId,
    },
    {
      title: `${dict.table.assets.columns.assigned_user}`,
      dataIndex: 'assignedUserIds',
      key: 'assignedUserIds',
      render: (assignedUserIds: number[]) => (
        <ul>
          {assignedUserIds.map((userId) => (
            <li key={userId}>{getUserName({ userId: userId }, usersData)}</li>
          ))}
        </ul>
      ),
    },
    {
      key: 'action',
      render: (text: string, record: Asset) => (
        <Space size="middle" direction="vertical" align="center">
          <Tooltip title="download">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size={'middle'}
              // onClick={() => generateWorkorderPdf(record)}
            />
          </Tooltip>

          <Space.Compact direction="vertical">
            <Button
              type="primary"
              icon={<EyeOutlined />}
              // onClick={() => handleSeeClick(record)}
            >
              {dict.table.workorders.buttons.checklist}
            </Button>
            <Button
              type="default"
              icon={<EditOutlined />}
              // onClick={() => handleEditClick(record)}
            >
              {dict.table.workorders.buttons.workorder}
            </Button>
            <Button
              type="dashed"
              danger
              icon={<UserSwitchOutlined />}
              onClick={() => handleEditAssignedUserClick(record)}
            >
              {dict.table.workorders.buttons.users}
            </Button>
          </Space.Compact>
        </Space>
      ),
    },
  ];

  const handleEditAssignedUserModalCancel = () => {
    setIsEditingAssigned(false);
  };

  const handleEditAssignedUsersConfirm = () => {
    handleUpdateAsset(editingAsset, setAssetsData);
    setIsEditingAssigned(false);
  };

  const handleEditAssignedUserClick = (asset: Asset) => {
    setIsEditingAssigned(true);
    setEditingAsset({ ...asset });
  };

  return (
    <>
      <Table
        dataSource={assetsData}
        columns={columns}
        bordered
        title={() => `${dict.table.workorders.title}`}
        pagination={{ pageSize: 10 }}
      />

      <EditAssignedUsersModal
        isOpen={isEditingAssigned}
        title={`${editingAsset?.name} - ${dict.modal.assigned_users} `}
        okText={`${dict.button.confirm}`}
        cancelText={`${dict.button.cancel}`}
        onCancel={handleEditAssignedUserModalCancel}
        onConfirm={handleEditAssignedUsersConfirm}
        data={{
          assignedUserIds: editingAsset?.assignedUserIds || [],
          type: 'asset',
        }}
        handleCheckboxChange={(checkedValues: CheckboxValueType[]) => {
          setEditingAsset((prev: any) => {
            return { ...prev!, assignedUserIds: checkedValues };
          });
        }}
      />

      <ToastContainer />
    </>
  );
};
