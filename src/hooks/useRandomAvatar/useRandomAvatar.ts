import { faker } from '@faker-js/faker';
import { useState } from 'react';

/**
 * Hook for generating a random avatar using Faker.js.
 * @returns An object with functions to fetch a random avatar and the current random avatar.
 */

export const useRandomAvatar = () => {
  const [randomAvatar, setRandomAvatar] = useState<string | undefined>();

  const fetchRandomAvatar = () => {
    setRandomAvatar(
      faker.image.urlLoremFlickr({
        category: 'abstract',
      })
    );
  };

  return { fetchRandomAvatar, randomAvatar } as const;
};
