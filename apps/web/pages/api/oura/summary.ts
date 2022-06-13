import type { NextApiRequest, NextApiResponse } from 'next';
import { getSummary } from '@libs/ouraring';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const activity = await getSummary();
  const response = await activity.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(response);
}
