import {  formatSpecification } from "@/functions";

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




