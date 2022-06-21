import { Photo } from '@components/Photo';
import fetcher from '@libs/fetcher';
import {
  Text,
  Spacer,
  Container,
  Tooltip,
  Button,
  Link,
  Row,
  Grid,
} from '@nextui-org/react';
import useSWR from 'swr';

type photo = {
  color?: string;
  created_at?: string;
  id?: string;
  likes: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};

export default function About() {
  const { data } = useSWR<photo[]>('/api/unsplash/photos', fetcher);

  return (
    <Container
      css={{
        minHeight: 'calc(100vh - 140px)',
      }}
    >
      <Text
        h1
        size={25}
        css={{
          textGradient: '45deg, $red500 0%, $blue500 30%',
        }}
        weight="bold"
      >
        About Me
      </Text>
      <Spacer y={3} />
      <Row>
        <Text
          size={20}
          css={{
            padding: '0 8px 0 0',
          }}
        >
          I'm Currently working fulltime as a
          <Text
            size={20}
            css={{
              textGradient: '45deg, $blue500 -20%, $red500 100%',
            }}
            weight="bold"
          >
            {' '}
            Senior Software Engineer and Frontend Team Lead
          </Text>
          <Text
            size={20}
            css={{
              padding: '0 8px',
            }}
          >
            at
          </Text>
          <Text
            size={20}
            css={{
              textGradient: '45deg, $blue500 -20%, $red500 100%',
            }}
            weight="bold"
          >
            Cado Security.
          </Text>
        </Text>
      </Row>
      <Spacer y={0.2} />
      <Row>
        <Text size={20}>
          I've been working in the web world for over 10 years.
        </Text>
      </Row>
      <Spacer y={0.2} />
      <Row>
        <Text size={20}>
          I started out doing Graphic Design and slowly edged into the Coding
          side after building interactive projects in flash back in the day.
        </Text>
      </Row>
      <Text></Text>
      <Spacer y={3} />
      <Tooltip content={"What I'm Doing Now"} placement="bottom">
        <Button type="button" color="error" auto light ripple={true}>
          <Link href={'/about/now'}>
            <a>Now</a>
          </Link>
        </Button>
      </Tooltip>
      <Spacer y={3} />

      <Row>
        <Text
          h3
          size={25}
          css={{
            textGradient: '45deg, $red500 0%, $blue500 30%',
          }}
          weight="bold"
        >
          Photography
        </Text>
      </Row>

      <Row>
        <Text size={20}>Some photos that I have uploaded to unsplash</Text>
      </Row>
      <Spacer y={2} />
      <Grid.Container gap={2}>
        {data &&
          data?.length &&
          data?.map((photo, index) => (
            <Grid xs={4} key={photo.id} css={{ padding: '4px 0' }}>
              <Photo id={photo.id} />
            </Grid>
          ))}
      </Grid.Container>
      <Spacer y={2} />
    </Container>
  );
}
