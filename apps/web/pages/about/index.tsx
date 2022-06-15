import { Text, Spacer, Container, Tooltip, Button, Link, Row } from '@nextui-org/react';

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
    </Container>
  );
}
