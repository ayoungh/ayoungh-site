import React from 'react';
import useSWR from 'swr';
import { formatDistance, getMilliseconds } from 'date-fns';
import fetcher from '@libs/fetcher';
import { Text, styled } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonRunning,
  faPersonWalking,
  faPersonBiking,
  faHeartPulse,
} from '@fortawesome/free-solid-svg-icons';

type activity = {
  name: string;
  start_date: string;
  type: string;
  id: number;
  distance: number;
};

const StyledFontAwesome = styled('div', {
  padding: '0 8px',
  display: 'inline',
});

const StyledA = styled('a', {
  padding: '8px 0',
  display: 'block',
});

export const Activities = () => {
  const { data } = useSWR<activity[]>('/api/strava/activity', fetcher);
  const { data: ouraData } = useSWR<activity[]>('/api/oura/daily', fetcher);

  function getMiles(meters) {
    const miles = meters * 0.000621371192;
    return `${miles.toFixed(2)} Miles`;
  }

  return (
    <div>
      <Text b>
        <StyledFontAwesome>
          <FontAwesomeIcon icon={faHeartPulse} />
        </StyledFontAwesome>
        Lastest Activities:
      </Text>
      <Text small>
        {data &&
          data.map(({ type, name, start_date, id, distance }) => (
            <StyledA
              href={`https://www.strava.com/activities/${id}`}
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              <StyledFontAwesome>
                {type.toLowerCase() === 'run' && (
                  <FontAwesomeIcon icon={faPersonRunning} />
                )}
                {type.toLowerCase() === 'walk' && (
                  <FontAwesomeIcon icon={faPersonWalking} />
                )}
                {type.toLowerCase() === 'ride' && (
                  <FontAwesomeIcon icon={faPersonBiking} />
                )}
              </StyledFontAwesome>
              {name} - {getMiles(distance)} -{' '}
              {formatDistance(new Date(start_date), new Date(), {
                addSuffix: true,
              })}
            </StyledA>
          ))}
      </Text>
    </div>
  );
};
