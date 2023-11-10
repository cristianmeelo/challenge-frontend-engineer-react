import { useState } from 'react';
import { UnitsList } from './UnitsList/UnitsList';

export const Units: React.FC<UnitsProps> = ({ unitsData, randomAvatar, setUnitsData, language, isLoading }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUnit, setEditingUnit] = useState<Unit>();

  const handleEditClick = (company: Company) => {
    setIsEditing(true);
    // setEditingCompany({ ...company });
  };

  return (
    <>
      <div style={{ padding: 24, minHeight: 360 }}>
         <UnitsList units={unitsData} 
         onEdit={handleEditClick} 
         randomAvatar={randomAvatar}
         isLoading={isLoading} /> 
      </div>
    </>
  );
};
