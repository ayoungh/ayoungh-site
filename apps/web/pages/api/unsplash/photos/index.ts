import type { NextApiRequest, NextApiResponse } from 'next';
import { getPhotos } from '@libs/unsplash';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const photos = await getPhotos();
  const response = await photos.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(response);
}
