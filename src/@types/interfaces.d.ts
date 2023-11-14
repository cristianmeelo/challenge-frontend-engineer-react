interface Company {
  id: number;
  name: string;
}

interface Unit {
  id: number;
  companyId: number;
  name: string;
}

interface User {
  id: number;
  companyId: number;
  unitId: number;
  name: string;
  email: string;
}

interface Workorder {
  id: number;
  assetId: number;
  assignedUserIds: number[];
  checklist: ChecklistItem[];
  description: string;
  priority: Priority;
  status: WorkOrderStatus;
  title: string;
}

type ChecklistItem = {
  completed: boolean;
  task: string;
};
type Priority = 'low' | 'medium' | 'high';
type WorkOrderStatus = 'in progress' | 'completed';

interface Asset {
  id: number;
  assignedUserIds: number[];
  companyId: number;
  unitId: number;
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
