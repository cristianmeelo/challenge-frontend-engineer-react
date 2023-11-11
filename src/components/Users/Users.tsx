import { Table } from 'antd';

import { BreadcrumbBasic as Breadcrumb } from '@/components';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';

import { userColumns } from './userColumns/userColumns';

type UserProps = {
  language: Locale;
  usersData: User[];
  companiesData: Company[];
  unitsData: Unit[];
};

// const [isEditing, setIsEditing] = useState<boolean>(false);
// const [editingUser, setEditingUser] = useState<User>();

// const handleEditClick = (text:string,user: User) => {
//   setIsEditing(true);
//   setEditingUser({ ...user });
// };

// const handleEditModalCancel = () => {
//   // handleCancelEditingCompany(setIsEditing, setEditingCompany);
//   setIsEditing(false); // quando descomentar acima, excluuir essa linha
// };

// const handleEditModalConfirm = () => {
//   // handleUpdateCompany(editingCompany, setCompaniesData);
//   setIsEditing(false);
// }

export const Users: React.FC<UserProps> = ({ companiesData, language, unitsData, usersData }) => {
  const dict = getLanguageUseClient(language);
  const columns = userColumns(companiesData, unitsData);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />
      <Table dataSource={usersData} columns={columns} bordered title={() => 'Lista de Usuários'} />

      {/*
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
      */}
    </>
  );
};
