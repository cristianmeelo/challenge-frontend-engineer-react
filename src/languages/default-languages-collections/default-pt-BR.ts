export const ptBR = {
  home: {
    title: 'Cultura TRACTIAN',
    description:
      'No coração do TRACTIAN está a busca pela excelência na experiência do usuário. Nossa cultura valoriza a inovação, eficiência e, acima de tudo, a simplicidade. Acreditamos que as soluções mais poderosas são aquelas que se integram perfeitamente à vida cotidiana, facilitando as tarefas complexas.',
    divider: 'Confira a lista das funcionalidades do App',
    steps: {
      step_1_title: 'Visualização Gráfica Avançada',
      step_1_description:
        'Explore todas as características dos ativos de maneira visual e informativa por meio de gráficos intuitivos. Tome decisões informadas com dados acessíveis e apresentados de forma clara.',
      step_2_title: 'Gestão Empresarial Completa',
      step_2_description:
        'Navegue pelas empresas, unidades e usuários de forma organizada e eficiente. Obtenha uma visão abrangente de sua estrutura organizacional e identifique áreas de melhoria.',
      step_3_title: 'Ações simplificadas',
      step_3_description:
        'Delegue responsabilidades com facilidade, atualize ativos, empresas, unidades e usuários com alguns cliques. Na TRACTIAN, simplificamos as tarefas cotidianas para quevocê possa se concentrar no que é mais importante.',
    },
  },

  sidebar: {
    icon_1: 'Ativos',
    icon_1_1: 'Modo Grade',
    icon_1_2: 'Modo Lista',
    icon_2: 'Empresas',
    icon_3: 'Unidades',
    icon_4: 'Usuários',
    icon_5: 'Ordens de Serviço',
    icon_6: 'Dashboard',
  },

  header: {
    message: 'As máquinas falam, nós ouvimos!',
  },

  toast_notifications: {
    loading: 'processando dados...',
    success: 'dados atualizados!',
    error: 'erro ao atualizar dados, tente novamente mais tarde.',
  },

  button: {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
  },

  dropdown: {
    change_company: 'Trocar Empresa',
    change_unit: 'Trocar Unidade',
    change_asset: 'Trocar Ativo',
  },

  table: {
    edit_column: 'Editar',
    users: {
      title: 'Lista de Usuários',
    },
    workorders: {
      title: 'Lista de Ordens de Serviço',
      columns: {
        title: 'Título',
        description: 'Descrição',
        asset: 'Ativo',
        status: 'Status',
        priority: 'Prioridade',
        assigned_users: 'Usuários Designados',
        action: 'Ação',
      },
      buttons: {
        checklist: 'Ver Checklist',
        workorder: 'Editar Ordem de Servico',
        users: 'Editar Usuários',
      },
    },
    assets: {
      title: 'Lista de Ativos',
      columns: {
        name: 'Nome',
        model: 'Modelo',
        status: 'Status',
        healthscore: 'Healthscore',
        sensors: 'Sensores',
        specifications: 'Especificações',
        company: 'Empresa',
        unit: 'Unidade',
        assigned_user: 'Usuários Designados',
      },
    },
  },

  modal: {
    edit: {
      company: 'Editar Empresa',
      unit: 'Editar Unidade',
      user: 'Editar Usuário',
      workorder: 'Editar Ordem de Serviço',
      asset: 'Editar Ativo',
    },
    assigned_users: 'Usuários Encarregados',
  },

  chart: {
    sensor_chart: {
      title: 'Distribuição Total de Sensores por Modelo',
      description:
        'O gráfico de pizza exibido abaixo oferece um insight valioso sobre a distribuição dos modelos de sensores em todos os ativos monitorados. Ao analisar a quantidade total de sensores para cada modelo, podemos identificar padrões e discrepâncias que podem impactar diretamente nas operações e na manutenção. Essa visualização proporciona uma compreensão rápida e clara das necessidades de sensorização, permitindo decisões estratégicas sobre aquisição e substituição de sensores. Este overview é crucial para otimizar a eficiência operacional e garantir que os ativos estejam equipados com os sensores adequados, contribuindo para uma gestão mais proativa e eficaz do parque industrial.',
      serie_a: 'Quantidade Total de Sensores',
    },
  },
};
