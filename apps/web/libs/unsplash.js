const access_token = process.env.UNSPLASH_ACCESS_KEY;
const DOMAIN = `https://api.unsplash.com`;
const ENDPOINT = `${DOMAIN}/users/ayoungh`;

export const getStats = async () => {

  return await fetch(`${ENDPOINT}/statistics?client_id=${access_token}`, {
    method: 'GET',
  });
};

export const getPhotos = async () => {
  return await fetch(`${ENDPOINT}/photos?client_id=${access_token}`, {
    method: 'GET',
  });
};

export const getPhoto = async (id) => {
  return await fetch(
    `${DOMAIN}/photos/${id.trim()}?client_id=${access_token}`,
    {
      method: 'GET',
    }
  );
};


