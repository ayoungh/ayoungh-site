const access_token = process.env.OURARING_ACCESS_TOKEN;
const ENDPOINT = `https://api.ouraring.com/v2/usercollection/`;

export const getSummary = async () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return await fetch(
    `https://api.ouraring.com/v1/activity?start=${yesterday.toISOString()}&end=${today.toISOString()}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const getReadiness = async () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return await fetch(
    `https://api.ouraring.com/v1/readiness?start=${yesterday.toISOString()}&end=${today.toISOString()}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const getActivity = async () => {

  return await fetch(`${ENDPOINT}daily_activity`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTags = async () => {
  const today = new Date()
  const yesterday = new Date(today)
//   today.setDate(yesterday.getDate() - 1);
//   yesterday.setDate(yesterday.getDate() - 1)
  return await fetch(
    `${ENDPOINT}tag?start_datetime=${yesterday.toISOString()}&end_datetime=${today.toISOString()}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const getHeartrate = async () => {
// const today = new Date()
// const yesterday = new Date(today)
// today.setDate(yesterday.getDate() - 2);
// yesterday.setDate(yesterday.getDate() - 3)

const today = '2022-04-01T00:00:00-08:00'
const yesterday = '2022-04-01T00:00:00-08:00';

// const apiendpoint = `${ENDPOINT}heartrate?start_datetime=${yesterday.toISOString()}&end_datetime=${today.toISOString()}`;
const apiendpoint = `${ENDPOINT}heartrate?start_datetime=${yesterday}&end_datetime=${today}`;

console.log(
  apiendpoint
);

  return await fetch(
    apiendpoint,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};
