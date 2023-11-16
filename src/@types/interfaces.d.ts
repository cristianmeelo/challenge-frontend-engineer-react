/**
 * Represents a company with an ID and name.
 */
interface Company {
  id: number;
  name: string;
}

/**
 * Represents a unit with an ID, associated company ID, and name.
 */
interface Unit {
  id: number;
  companyId: number;
  name: string;
}

/**
 * Represents a user with an ID, associated company ID, unit ID, name, and email.
 */
interface User {
  id: number;
  companyId: number;
  unitId: number;
  name: string;
  email: string;
}

/**
 * Represents a work order with an ID, asset ID, assigned user IDs, checklist, description,
 * priority, status, and title.
 */
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

/**
 * Represents a checklist item with completion status and task description.
 */
type ChecklistItem = {
  completed: boolean;
  task: string;
};

/**
 * Priority of a checklist item.
 * Can be 'low', 'medium', or 'high'.
 */
type Priority = 'low' | 'medium' | 'high';

/**
 * Status of a work order.
 * Can be 'in progress' or 'completed'.
 */
type WorkOrderStatus = 'in progress' | 'completed';

/**
 * Represents an asset with various properties such as ID, assigned user IDs, company ID, unit ID,
 * name, model, image, sensors, specifications, status, health score, metrics, and health history.
 */
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

/**
 * Represents specifications for an asset, including maximum temperature, power, and RPM.
 */
interface AssetSpecifications {
  maxTemp: number;
  power?: number;
  rpm?: number | null;
}

/**
 * Represents metrics for an asset, including the last uptime timestamp and various uptime counts.
 */
interface AssetMetrics {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

/**
 * Represents an item in the health history of an asset, including status and timestamp.
 */
interface HealthHistoryItem {
  status: AssetStatus;
  timestamp: string;
}

/**
 * Status of an asset.
 * Can be 'inOperation', 'inDowntime', 'inAlert', 'unplannedStop', or 'plannedStop'.
 */
type AssetStatus = 'inOperation' | 'inDowntime' | 'inAlert' | 'unplannedStop' | 'plannedStop';

/**
 * Represents properties for the `Page` component.
 */
type PageProps = {
  params: {
    lang: Locale;
  };
};

/**
 * Props for the View components.
 */
type ViewProps = {
  language: Locale;
};
