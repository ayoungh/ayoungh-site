const access_token = process.env.UNSPLASH_ACCESS_KEY;
const ENDPOINT = `https://api.unsplash.com/users/ayoungh/statistics`;

export const getStats = async () => {

  return await fetch(`${ENDPOINT}?client_id=${access_token}`, {
    method: 'GET',
    // headers: {
    //   Authorization: `Bearer ${access_token}`,
    // },
  });
};
