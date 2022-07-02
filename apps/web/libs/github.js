const ENDPOINT = `https://api.github.com/users/ayoungh`;

export const getProfile = async () => {
  return await fetch(
    `${ENDPOINT}`,
    {
      method: 'GET',
    }
  );
};