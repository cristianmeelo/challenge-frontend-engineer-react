import { Badge } from 'antd';

export const renderModelBadge = (model: string) => {
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
