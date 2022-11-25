import fetcher from '@libs/fetcher';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { formatDistance } from 'date-fns';

type StravaData = {
  name: string;
  start_date: string;
  type: string;
  id: number;
  distance: number;
};

const HealthCard = () => {
  const { data } = useSWR<StravaData[]>('/api/strava/activity', fetcher);
  // const { data: ouraData } = useSWR<activity[]>('/api/oura/daily', fetcher);

  function getMiles(meters) {
    const miles = meters * 0.000621371192;
    return `${miles.toFixed(2)} Miles`;
  }

  if (!data) return null;

  return (
    <div className="rounded-md rounded-l-none">
      <div className="flex bg-white border-b">
        <h2 className=" m-6 text-sm font-bold text-gray-900">Health</h2>
      </div>
      <div className="bg-white opacity-75">
        {data &&
          data.map(({ type, name, start_date, id, distance }) => (
            <Link href={`https://www.strava.com/activities/${id}`} key={id}>
              <div className="flex flex-1 flex-col p-8 relative hover:bg-gray-100 border-b">
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {type}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Workout Name</dt>
                  <dd className="text-sm text-gray-500">{name}</dd>
                  <dt className="sr-only">Workout Distance</dt>
                  <dd className="text-sm text-gray-500">
                    {getMiles(distance)}
                  </dd>
                  <dt className="sr-only">Distance</dt>
                  <dd className="mt-3">
                    <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      {formatDistance(new Date(start_date), new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                  </dd>
                </dl>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HealthCard;
