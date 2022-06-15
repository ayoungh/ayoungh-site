import React from 'react';
import useSWR from 'swr';
import { formatDistance } from 'date-fns';
import fetcher from '@libs/fetcher';
import { Text, styled } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';


type activity = {
  name: string;
  start_date: string;
  type: string;
};

const StyledFontAwesome = styled('div', {
  padding: '0 8px',
  display: 'inline',
});

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
              <StyledFontAwesome>
                <FontAwesomeIcon icon={faPersonRunning} />
              </StyledFontAwesome>
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
