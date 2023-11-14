import { Badge } from 'antd';

/**
 * Renders a badge based on the provided model type.
 *
 * @param {string} model - The model type (e.g., 'motor', 'fan', or other).
 * @returns {JSX.Element} - The badge component representing the model type.
 */
export const renderModelBadge = (model: string): JSX.Element => {
  let text = '';
  let color = '';

  switch (model.toLowerCase()) {
    case 'motor':
      text = 'Motor';
      color = 'red';
      break;
    case 'fan':
      text = 'Fan';
      color = 'cyan';
      break;
    default:
      text = 'Other';
      color = 'default';
  }

  return <Badge.Ribbon text={text} color={color} />;
};
