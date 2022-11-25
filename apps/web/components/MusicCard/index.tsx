import fetcher from '@libs/fetcher';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

type SpotifyData = {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
};

const MusicCard = () => {
  const { data } = useSWR<SpotifyData>('/api/spotify/now-playing', fetcher);
  console.log(data);

  if (!data) return null;

  return (
    <div className="bg-white shadow-lg rounded-md rounded-r-none">
      <div className="flex bg-white border-b">
        <h2 className=" m-6 text-sm font-bold text-gray-900">Listening</h2>
      </div>

      <Link href={data.songUrl}>
        <div className="flex flex-1 flex-col p-8 relative hover:bg-gray-100">
          <Image
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-sm shadow-lg"
            width="32"
            height="32"
            src={data.albumImageUrl}
            alt={data.album}
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">
            {data.title}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Artist</dt>
            <dd className="text-sm text-gray-500">{data.artist}</dd>
            <dt className="sr-only">Album</dt>
            <dd className="mt-3">
              <span className="rounded-lg bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {data.album}
              </span>
            </dd>
          </dl>
        </div>
      </Link>
    </div>
  );
};

export default MusicCard;
