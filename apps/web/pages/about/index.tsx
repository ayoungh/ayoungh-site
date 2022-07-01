import { UnsplashPhotos } from '@components/UnsplashPhotos';
import {
  Text,
  Spacer,
  Container,
  Tooltip,
  Button,
  Link,
  Row,
  styled,
} from '@nextui-org/react';
import { gray } from '@radix-ui/colors';

const StyledHr = styled('hr', {
  background: `${gray.gray7}`,
  margin: '32px 0'
});

export default function About() {

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
      <Spacer y={2} />
      <Row>
        <Text
          size={20}
          css={{
            padding: '0 8px 0 0',
            display: 'inline',
          }}
        >
          I'm Currently working fulltime as a
          <Text
            size={20}
            css={{
              textGradient: '45deg, $blue500 -20%, $red500 100%',
              display: 'inline',
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
              display: 'inline',
            }}
          >
            at
          </Text>
          <Text
            size={20}
            css={{
              textGradient: '45deg, $blue500 -20%, $red500 100%',
              display: 'inline',
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

      <StyledHr />

      <Tooltip content={"What I'm Doing Now"} placement="bottom">
        <Button type="button" color="error" auto light ripple={true}>
          <Link href={'/about/now'}>
            <a>Now</a>
          </Link>
        </Button>
      </Tooltip>

      <StyledHr />

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
      <UnsplashPhotos />

      <Spacer y={2} />
    </Container>
  );
}
