export const enUS = {
  home: {
    title: 'TRACTIAN Culture',
    description:
      'At the heart of TRACTIAN is the pursuit of excellence in user experience. Our culture values innovation, efficiency, and, above all, simplicity. We believe that the most powerful solutions are those that seamlessly integrate into everyday life, making complex tasks easier.',
    divider: 'Check out the list of App features',
    steps: {
      step_1_title: 'Advanced Graphical Visualization',
      step_1_description:
        'Explore all the features of assets visually and informatively through intuitive graphics. Make informed decisions with accessible and clearly presented data.',
      step_2_title: 'Complete Business Management',
      step_2_description:
        'Navigate through companies, units, and users in an organized and efficient manner. Gain a comprehensive view of your organizational structure and identify areas for improvement.',
      step_3_title: 'Simplified Actions',
      step_3_description:
        'Delegate responsibilities with ease, update assets, companies, units, and users with just a few clicks. At TRACTIAN, we simplify everyday tasks so you can focus on what matters most.',
    },
  },

  sidebar: {
    icon_1: 'Assets',
    icon_1_1: 'Grid Mode',
    icon_1_2: 'List Mode',
    icon_2: 'Companies',
    icon_3: 'Units',
    icon_4: 'Users',
    icon_5: 'Workorders',
    icon_6: 'Dashboard',
  },

  header: {
    message: 'Machines talk, we listen! ',
  },

  toast_notifications: {
    loading: 'processing data...',
    success: 'data updated!',
    error: 'error updating data, please try again later.',
  },

  button: {
    confirm: 'Confirm',
    cancel: 'Cancel',
  },

  table: {
    edit_column: 'Edit',
    users: {
      title: 'Users List',
      columns: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        unit: 'Unit',
        action: 'Edit',
      },
    },
    workorders: {
      title: 'Workorders List',
      columns: {
        title: 'Title',
        description: 'Description',
        asset: 'Asset',
        status: 'Status',
        priority: 'Priority',
        assigned_users: 'Assigned Users',
        action: 'Action',
      },
      buttons: {
        checklist: 'View Checklist',
        workorder: 'Edit Work Order',
        users: 'Edit Users',
      },
    },
    assets: {
      title: 'Assets List',
      columns: {
        name: 'Name',
        model: 'Model',
        status: 'Status',
        healthscore: 'Health Score',
        sensors: 'Sensors',
        specifications: 'Specifications',
        company: 'Company',
        unit: 'Unit',
        assigned_user: 'Assigned Users',
        total_collects_uptime: 'Total Collections',
        total_uptime: 'Total Collection Hours',
        last_uptime_at: 'Last Collection Date',
      },
    },
  },

  dropdown: {
    change_company: 'Change Company',
    change_unit: 'Change Unit',
    change_asset: 'Change Asset',
  },

  modal: {
    edit: {
      company: 'Edit company',
      unit: 'Edit Unit',
      user: 'Edit User',
      workorder: 'Edit Workorder',
      asset: 'Edit Asset',
    },
    assigned_users: 'Assigned Users',
  },

  chart: {
    sensor_chart: {
      title: 'Total Sensor Distribution by Model',
      description:
        'The Total Sensor Distribution by Model chart provides valuable insight into the distribution of sensor models across all monitored assets. By analyzing the total number of sensors for each model, we can identify patterns and discrepancies that can directly impact operations and maintenance. This visualization offers a quick and clear understanding of sensorization needs, enabling strategic decisions on sensor acquisition and replacement. This overview is crucial for optimizing operational efficiency and ensuring that assets are equipped with the right sensors, contributing to a more proactive and effective management of the industrial park.',
      series: {
        a: 'Total Sensor Quantity',
      },
    },
    user_chart: {
      title: 'Number of Assets per User',
      description:
        "The Number of Assets per User chart provides valuable insights into the distribution of responsibilities among users regarding the company's assets. Observing the chart makes it evident which users are associated with a higher number of assets, highlighting those with a more substantial workload. This visualization is essential for identifying possible adjustments in task allocation, allowing a clear analysis of who is more involved in operations.",
      y_axis: {
        a: 'User',
        b: 'Number of Assets',
      },
      series: {
        a: 'Assets',
      },
    },
  },

  input_search: {
    asset: 'Search assets by name...',
  },
  expand_card: {
    asset: {
      see_more: 'See more',
      see_less: 'See less',
      tab: 'Health History',
    },
  },
};
