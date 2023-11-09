import { Modal } from 'antd';

export const handleDeleteCompany = (record: Company, setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>) => {
  Modal.confirm({
    title: 'Confira os dados',
    okText: 'Bete Bala',
    okType: 'danger',
    onOk: () => {
      setCompaniesData((prev) => {
        return prev.filter((company) => company.id !== record.id);
      });
    },
  });
};
