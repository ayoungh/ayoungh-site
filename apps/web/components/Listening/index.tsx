import React from 'react';
import useSWR from 'swr';
import fetcher from '@libs/fetcher';
import Icon from '@components/SocialIcons';
import { Text, Card, Row, styled, Container } from '@nextui-org/react';

type listening = {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
};

// @ts-ignore
const IconContainer = styled('div', {
  width: '30px',
  height: '20px',
  display: 'inline-block',
});

export const Listening = () => {
  const { data } = useSWR<listening>('/api/spotify/now-playing', fetcher);

  if (data?.isPlaying)
    return (
      <Container>
        <Row justify="center">
          <Card css={{ mw: '50px', h: '50px', marginRight: '10px' }}>
            <Card.Header
              css={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}
            >
              <IconContainer>
                <Icon fgColor="#1ED760" networkKey="spotify" />
              </IconContainer>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src={data.albumImageUrl}
                width="100%"
                height={200}
                alt={data.title}
              />
            </Card.Body>
          </Card>
          <div>
            <Text b>{data.title}</Text> - <Text small>{data.artist}</Text>
          </div>
        </Row>
      </Container>
    );
  return <div>Not currently listening.</div>;
};
