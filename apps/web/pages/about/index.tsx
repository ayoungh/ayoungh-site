import { Text, Spacer, Container, Tooltip, Button, Link } from '@nextui-org/react';

export default function About() {
  return (
    <Container
      css={{
        minHeight: 'calc(100vh - 140px)',
      }}
    >
      <Text
        h2
        size={25}
        css={{
          textGradient: '45deg, $red500 0%, $blue500 30%',
        }}
        weight="bold"
      >
        About Me
      </Text>
      <Spacer y={3} />
      <Text>
        I'm Currently working fulltime as a Senior Software Engineer and
        Frontend Team Lead at Cado Security.
      </Text>
      <Text>I've been working in the web world for over 10 years. </Text>
      <Text>
        I started out doing graphic design and slowly edged into the coding side
        after building interactive projects in flash back in the day.
      </Text>
      <Text>
        I then got into building tests (AB testing) on websites using jQuery and
        my world blew up. How much I could do using Javascript.
      </Text>

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
