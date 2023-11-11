'use client';
import { useEffect, useState } from 'react';
import { Layout, Space, Table } from 'antd';
import { EditOutlined} from '@ant-design/icons';


import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb, EditUserModal } from '@/components';
import { useUsersData } from '@/data/useUsersData/useUsersData';
import { useCompaniesData, useUnitsData } from '@/data';
import { getCompanyName, getUnitName } from '@/functions';


export default function Users({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { fetchUsersData, usersData } = useUsersData(params.lang);
  const { fetchCompaniesData, companiesData } = useCompaniesData(params.lang);
  const { fetchUnitsData, unitsData } = useUnitsData(params.lang);


  useEffect(() => {
    fetchUsersData();
    fetchCompaniesData();
    fetchUnitsData();
  }, []);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User>();



  const handleEditClick = (text:string,user: User) => {
    setIsEditing(true);
    setEditingUser({ ...user });
  };

  const handleEditModalCancel = () => {
    // handleCancelEditingCompany(setIsEditing, setEditingCompany);
    setIsEditing(false); // quando descomentar acima, excluuir essa linha
  };

  const handleEditModalConfirm = () => {
    // handleUpdateCompany(editingCompany, setCompaniesData);
    setIsEditing(false);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: { name: string | any[]; }, b: { name: string | any[]; }) => a.name.length - b.name.length,

    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'companyId',
      key: 'companyId',
      render: (companyId: string) => getCompanyName({ companyId }, companiesData),
    },
    {
      title: 'Unit',
      dataIndex: 'unitId',
      key: 'unitId',
      render: (unitId: string) => getUnitName({ unitId }, unitsData),
      filters: unitsData.map((unit) => ({
        text: unit.name,
        value: unit.id,
      })),
      onFilter: (value: string, record: any) => record.unitId === value,
    },
     {
    title: 'Editar',
    dataIndex: 'edit',
    key: 'edit',
    render: (text:string, record: User) => (
      <Space size="middle">
        <EditOutlined onClick={() => handleEditClick(text, record)} style={{ cursor: 'pointer' }} />
      </Space>
    ),


  },
  ];

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />
      <Table dataSource={usersData} columns={columns} bordered
              title={() => "Lista de Usuários"}

      />
    <EditUserModal
        isOpen={isEditing}
        onCancel={handleEditModalCancel}
        onConfirm={handleEditModalConfirm}
        value={editingUser}
        title={dict.modal.edit.company}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
        onChange={(e: { target: { value: string; }; }) => setEditingUser((prev) => {
          return { ...prev!, name: e.target.value };
        })} 
        handleMenuClick={()=> console.log("menu clicked")} 
        language={params.lang}   
        companies={companiesData}
        units={unitsData}
           />
    </>
  );
}

