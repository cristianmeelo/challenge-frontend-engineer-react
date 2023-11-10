import { useState } from 'react';
import { Modal } from 'antd';

import { faker } from '@faker-js/faker';
import { getCompanies } from '@/services/http';

const emptyCompaniesData: Company[] = [];

export const useCompaniesData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [companiesData, setCompaniesData] = useState<Company[]>(emptyCompaniesData);
  const [randomAvatar, setRandomAvatar] = useState<string>();

  const fetchCompaniesData = async () => {
    try {
      const data = await getCompanies();
      setCompaniesData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleFetchRandomAvatar = () => {
    setRandomAvatar(
      faker.image.urlLoremFlickr({
        category: 'abstract',
      })
    );
  };

  // const handleDeleteCompany = (record: Company, setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>) => {
  const handleDeleteCompany = (record: Company) => {
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

  return {
    fetchCompaniesData,
    handleFetchRandomAvatar,
    isLoading,
    companiesData,
    randomAvatar,
    setCompaniesData,
    handleDeleteCompany,
  };
};
