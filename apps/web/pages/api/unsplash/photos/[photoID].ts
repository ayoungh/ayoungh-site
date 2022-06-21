import type { NextApiRequest, NextApiResponse } from 'next';
import { getPhoto } from '@libs/unsplash';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { photoID } = req.query;
  console.log('photo ID: ', photoID)

  const photo = await getPhoto(photoID);
  const response = await photo.json();

  console.log('res:', response)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(response);
}
