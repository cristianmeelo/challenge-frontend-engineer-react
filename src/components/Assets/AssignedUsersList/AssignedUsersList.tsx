import { getUserName } from '@/functions';
import React from 'react';

export const AssignedUsersList: React.FC<AssignedUsersListProps> = ({
  assignedUserIds,
  usersData,
}) => {
  return (
    <div>
      {assignedUserIds.map((userId, index) => {
        const userName = getUserName({ userId }, usersData);

        return (
          <div key={index}>
            {userName}
            <br />
          </div>
        );
      })}
    </div>
  );
};
