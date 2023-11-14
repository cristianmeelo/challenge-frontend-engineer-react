export const esMX = {
  home: {
    title: 'Cultura TRACTIAN',
    description:
      'En el corazón de TRACTIAN está la búsqueda de la excelencia en la experiencia del usuario. Nuestra cultura valora la innovación, la eficiencia y, sobre todo, la simplicidad. Creemos que las soluciones más poderosas son aquellas que se integran perfectamente a la vida cotidiana, facilitando las tareas complejas.',
    divider: 'Consulta la lista de funciones de la aplicación',
    steps: {
      step_1_title: 'Visualización Gráfica Avanzada',
      step_1_description:
        'Explora todas las características de los activos de manera visual e informativa a través de gráficos intuitivos. Toma decisiones informadas con datos accesibles y presentados de manera clara.',
      step_2_title: 'Gestión Empresarial Completa',
      step_2_description:
        'Navega por empresas, unidades y usuarios de manera organizada y eficiente. Obtén una visión integral de tu estructura organizativa e identifica áreas de mejora.',
      step_3_title: 'Acciones Simplificadas',
      step_3_description:
        'Delega responsabilidades con facilidad, actualiza activos, empresas, unidades y usuarios con solo algunos clics. En TRACTIAN, simplificamos las tareas cotidianas para que puedas enfocarte en lo que es más importante.',
    },
  },

  sidebar: {
    icon_1: 'Activos',
    icon_1_1: 'Modo Cuadrícula',
    icon_1_2: 'Modo de lista',
    icon_2: 'Empresas',
    icon_3: 'Unidades',
    icon_4: 'Usuarios',
    icon_5: 'Órdenes de Servicio',
    icon_6: 'Dashboard',
  },

  header: {
    message: 'Las máquinas hablan, ¡nosotros escuchamos!',
  },

  toast_notifications: {
    loading: 'procesando datos...',
    success: '¡datos actualizados!',
    error: 'error al actualizar los datos, inténtalo de nuevo más tarde.',
  },

  button: {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
  },

  table: {
    edit_column: 'Editar',
    users: {
      title: 'Lista de Usuarios',
      columns: {
        name: 'Nombre',
        email: 'Correo electrónico',
        company: 'Empresa',
        unit: 'Unidad',
        action: 'Editar',
      },
    },
    workorders: {
      title: 'Lista de Órdenes de Servicio',
      columns: {
        title: 'Título',
        description: 'Descripción',
        asset: 'Activo',
        status: 'Estado',
        priority: 'Prioridad',
        assigned_users: 'Usuarios Designados',
        action: 'Acción',
      },

      buttons: {
        checklist: 'Ver Checklist',
        workorder: 'Editar Orden de Servicio',
        users: 'Editar Usuarios',
      },
    },
    assets: {
      title: 'Lista de Activos',
      columns: {
        name: 'Nombre',
        model: 'Modelo',
        status: 'Estado',
        healthscore: 'Puntuación de Salud',
        sensors: 'Sensores',
        specifications: 'Especificaciones',
        company: 'Empresa',
        unit: 'Unidad',
        assigned_user: 'Usuarios Designados',
        total_collects_uptime: 'Total Collections',
        total_uptime: 'Total Collection Hours',
        last_uptime_at: 'Last Collection Date',
      },
    },
  },

  dropdown: {
    change_company: 'Cambiar Empresa',
    change_unit: 'Cambiar Unidad',
    change_asset: 'Cambiar Activo',
  },

  modal: {
    edit: {
      company: 'Editar empresa',
      unit: 'Editar Unidade',
      user: 'Editar Usuario',
      workorder: 'Editar Órden de Servicio',
      asset: 'Editar Activo',
    },
    assigned_users: 'Usuarios Asignados',
  },

  chart: {
    sensor_chart: {
      title: 'Distribución Total de Sensores por Modelo',
      description:
        'El gráfico Distribución Total de Sensores por Modelo brinda información valiosa sobre la distribución de modelos de sensores en todos los activos monitoreados. Al analizar la cantidad total de sensores para cada modelo, podemos identificar patrones y discrepancias que pueden afectar directamente las operaciones y el mantenimiento. Esta visualización proporciona una comprensión rápida y clara de las necesidades de sensorización, permitiendo decisiones estratégicas sobre la adquisición y sustitución de sensores. Este resumen es crucial para optimizar la eficiencia operativa y garantizar que los activos estén equipados con los sensores adecuados, contribuyendo a una gestión más proactiva y eficaz del parque industrial.',
      series: {
        a: 'Cantidad Total de Sensores',
      },
    },
    user_chart: {
      title: 'Cantidad de Activos por Usuario',
      description:
        'El gráfico de Cantidad de Activos por Usuario proporciona información valiosa sobre la distribución de responsabilidades entre los usuarios con respecto a los activos de la empresa. Observando el gráfico, se hace evidente qué usuarios están asociados con un mayor número de activos, destacando aquellos con una carga de trabajo más sustancial. Esta visualización es esencial para identificar posibles ajustes en la asignación de tareas, permitiendo un análisis claro de quién está más involucrado en las operaciones.',
      y_axis: {
        a: 'Usuario',
        b: 'Cantidad de Activos',
      },
      series: {
        a: 'Activos',
      },
    },
    status_chart: {
      title: 'Salud de las Máquinas',
      description:
        'La salud de las máquinas se refiere a la condición operativa y la eficiencia de los equipos industriales. Mantener las máquinas en buen estado es crucial para evitar tiempos de inactividad no programados, garantizar la seguridad en el lugar de trabajo y optimizar la producción. La negligencia en el mantenimiento puede resultar en pérdida de producción, altos costos e impactos ambientales. Monitoreo Las tecnologías, como los sensores y el análisis de datos, desempeñan un papel clave en la detección temprana de problemas y la promoción de prácticas de mantenimiento proactivo, contribuyendo a la eficiencia y sostenibilidad de las operaciones industriales.',
    },
  },

  input_search: {
    asset: 'Buscar activos por nombre...',
  },

  expand_card: {
    asset: {
      see_more: 'Ver más',
      see_less: 'Ver menos',
      tab: 'Historia de salud',
    },
  },
};
