import React from 'react';
import useSWR from 'swr';
import { formatDistance } from 'date-fns';
import fetcher from '@libs/fetcher';
import { Text } from '@nextui-org/react';

type activity = {
  name: string;
  start_date: string;
  type: string;
};

export const Activities = () => {
  const { data } = useSWR<activity[]>('/api/strava/activity', fetcher);
  const { data: ouraData } = useSWR<activity[]>('/api/oura/daily', fetcher);

  return (
    <div>
      <Text b>Last Activity:</Text>
      <Text small>
        {data &&
          data.map(({ type, name, start_date }) => (
            <div>
              {type} - {name} -{' '}
              {formatDistance(new Date(start_date), new Date(), {
                addSuffix: true,
              })}
            </div>
          ))}
      </Text>
    </div>
  );
};
