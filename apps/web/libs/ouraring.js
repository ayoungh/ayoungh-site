const access_token = process.env.OURARING_ACCESS_TOKEN;
const ENDPOINT = `https://api.ouraring.com/v2/usercollection/daily_activity`;

export const getActivity = async () => {

  return await fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
