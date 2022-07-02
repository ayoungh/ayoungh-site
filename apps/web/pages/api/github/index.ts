import type { NextApiRequest, NextApiResponse } from 'next';
import { getProfile } from '@libs/github';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const profile = await getProfile();
  const response = await profile.json();

  console.log(profile)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(response);
}
