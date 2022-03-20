import querystring from 'querystring';

const client_id = process.env.STRAVA_CLIENT_ID;
const client_secret = process.env.STRAVA_CLIENT_SECRET;
const refresh_token = process.env.STRAVA_REFRESH_TOKEN;
const TOKEN_ENDPOINT = `https://www.strava.com/oauth/token`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      client_id,
      client_secret,
      refresh_token,
      grant_type: 'refresh_token',
    }),
  });

  return response.json();
};

export const getActivity = async () => {
  const { access_token } = await getAccessToken();

  // Just get the last item?
  return await fetch(
    'https://www.strava.com/api/v3/athlete/activities?per_page=1',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};
