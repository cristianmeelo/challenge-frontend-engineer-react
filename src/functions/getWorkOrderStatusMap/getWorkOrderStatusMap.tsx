import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

/**
 * Retrieves a mapping between work order statuses and their corresponding React components (Icons).
 *
 * @returns {Record<WorkOrderStatus, { icon: React.ReactNode; text: string }>} - An object mapping work order statuses to Icon components.
 */
export const getWorkOrderStatusMap = (): Record<
  WorkOrderStatus,
  { icon: React.ReactNode; text: string }
> => {
  return {
    'in progress': {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: 'in progress',
    },
    completed: { icon: <CheckCircleOutlined style={{ color: 'green' }} />, text: 'completed' },
  };
};
