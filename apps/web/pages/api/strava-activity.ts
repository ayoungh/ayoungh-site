import type { NextApiRequest, NextApiResponse } from 'next';
import { getActivity } from '../../libs/strava';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const activity = await getActivity();
  const response = await activity.json();
  console.log(response.map(({name})=>name))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ runs: response.map(({name, start_date})=>{return{name, start_date}})});
}
