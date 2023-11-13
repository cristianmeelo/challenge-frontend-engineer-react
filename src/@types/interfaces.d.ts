interface Company {
  id: string;
  name: string;
}

interface Unit {
  id: string;
  companyId: string;
  name: string;
}

interface User {
  id: string;
  companyId: string;
  unitId: string;
  name: string;
  email: string;
}

interface Workorder {
  assetId: string;
  assignedUserIds: string[];
  checklist: {
    completed: boolean;
    task: string;
  }[];
  description: string;
  id: number;
  priority: Priority;
  status: WorkOrderStatus;
  title: string;
}

type Priority = 'low' | 'medium' | 'high';
type WorkOrderStatus = 'in progress' | 'completed';

interface Asset {
  id: string;
  assignedUserIds: string[];
  companyId: string;
  unitId: string;
  name: string;
  model: string;
  image: string;
  sensors: string[];
  specifications: AssetSpecifications;
  status: Status;
  healthscore: number;
  metrics: AssetMetrics;
  healthHistory: HealthHistoryItem[];
}

interface AssetSpecifications {
  maxTemp: number;
  power?: number;
  rpm?: number | null;
}

interface AssetMetrics {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

interface HealthHistoryItem {
  status: AssetStatus;
  timestamp: string;
}

type AssetStatus = 'inOperation' | 'inDowntime' | 'inAlert' | 'unplannedStop' | 'plannedStop';

type PageProps = {
  params: {
    lang: Locale;
  };
};

type ViewProps = {
  language: Locale;
};
