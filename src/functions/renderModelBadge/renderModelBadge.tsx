import { Badge } from 'antd';

/**
 * Renders a badge based on the provided model type.
 *
 * @param {string} model - The model type (e.g., 'motor', 'fan', or other).
 * @returns {JSX.Element} - The badge component representing the model type.
 *
 * @example
 * const motorBadge = renderModelBadge('motor');
 * console.log(motorBadge);
 * // Output: <Badge.Ribbon text="Motor" color="red" />
 */
export const renderModelBadge = (model: string): JSX.Element => {
  /**
   * The text content for the badge.
   * @type {string}
   */
  let text = '';

  /**
   * The color of the badge.
   * @type {string}
   */
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

  /**
   * The badge component representing the model type.
   * @type {JSX.Element}
   */
  return <Badge.Ribbon text={text} color={color} />;
};
