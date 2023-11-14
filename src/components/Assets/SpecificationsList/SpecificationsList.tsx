export const SpecificationsList: React.FC<SpecificationsListProps> = ({
  specifications,
  language,
}) => {
  return (
    <ul>
      {Object.entries(specifications).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {formatSpecification(key, value, language)}
        </li>
      ))}
    </ul>
  );
};

const formatSpecification = (key: string, value: any, language: Locale): React.ReactNode => {
  switch (key) {
    case 'maxTemp':
      const formattedValue = language === 'en-US' ? celsiusToFahrenheit(value) : value;
      return `${formattedValue}º${language === 'en-US' ? 'F' : 'C'}`;
    case 'power':
      return `${value} kWh`;
    default:
      return value;
  }
};

const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};
