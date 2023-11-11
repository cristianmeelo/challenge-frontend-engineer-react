import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

/**
 * Hook for generating a random avatar using Faker.js.
 * @returns An object with functions to fetch a random avatar and the current random avatar.
 */

export const useRandomAvatar = () => {
  const [randomAvatar, setRandomAvatar] = useState<string | undefined>();

  useEffect(() => {
    fetchRandomAvatar();
  }, []);

  const fetchRandomAvatar = () => {
    setRandomAvatar(
      faker.image.urlLoremFlickr({
        category: 'abstract',
      })
    );
  };

  return { fetchRandomAvatar, randomAvatar } as const;
};
