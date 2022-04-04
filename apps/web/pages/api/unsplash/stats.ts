import type { NextApiRequest, NextApiResponse } from 'next';
import { getStats } from '@libs/unsplash';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stats = await getStats();
  const response = await stats.json();

  console.log('response::', response)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({downloads:response.downloads, views: response.views});
}
