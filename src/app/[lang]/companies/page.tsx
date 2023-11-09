'use client';

import { useState, useEffect } from 'react';
import { Breadcrumb, Layout, theme, Typography, Modal, Avatar, List, Skeleton, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export default function Companies({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);
  const { Content } = Layout;
  const { Title } = Typography;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCompany, setEditingCompany] = useState<Company>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomAvatar, setRandomAvatar] = useState<string>();
  const [companiesData, setCompaniesData] = useState<Company[]>([]);

  useEffect(() => {
    async function fetchCompaniesData() {
      const response = await fetch('https://my-json-server.typicode.com/tractian/fake-api/companies');
      const data = await response.json();
      setCompaniesData(data);
      setIsLoading(false);
    }
    fetchCompaniesData();
    setRandomAvatar(
      faker.image.urlLoremFlickr({
        category: 'abstract',
      })
    );
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onDeleteCompany = (record: Company) => {
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

  const onEditCompany = (record: Company) => {
    setIsEditing(true);
    setEditingCompany({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingCompany(undefined);
  };

  const DoneEditing = () => {
    setCompaniesData((prev) => {
      return prev.map((company) => {
        if (company.id === editingCompany?.id) {
          return editingCompany as Company;
        } else {
          return company;
        }
      });
    });
    resetEditing();
  };

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Title level={1}>{dict.sidebar.icon_2}</Title>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <List
          className="demo-loadmore-list"
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={companiesData}
          renderItem={(item: Company) => (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">
                  <EditOutlined onClick={() => onEditCompany(item)} />
                  <DeleteOutlined onClick={() => onDeleteCompany(item)} style={{ color: 'red', marginLeft: 12 }} />
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={isLoading} active>
                <List.Item.Meta
                  avatar={<Avatar src={randomAvatar} />}
                  title={<a href="/">{item.name}</a>}
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem iste architecto nostrum quos voluptatem!"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
      <Modal title="Edit Company" open={isEditing} okText="Confirmar" onCancel={() => resetEditing()} onOk={() => DoneEditing()}>
        <Input
          value={editingCompany?.name}
          onChange={(e) =>
            setEditingCompany((prev) => {
              return { ...prev!, name: e.target.value };
            })
          }
        />
      </Modal>
    </Content>
  );
}
