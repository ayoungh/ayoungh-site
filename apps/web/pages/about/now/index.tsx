import { Text, Spacer, Container } from '@nextui-org/react';

export default function Now() {
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
        What I'm Doing Now
      </Text>

      <Spacer y={3} />

      <Text>
        I'm Currently working fulltime as a Senior Software Engineer and
        Frontend Team Lead at Cado Security.
      </Text>
      <Text>Living in beautiful Surrey, United Kingdom.</Text>
      <Text>Outside of work I try to keep up to date with what is going on in this fast industry we work in.</Text>
      <Text> I spent time with my 2 children and like to be creative any chance I get.</Text>
      <Text></Text>
      <br />
      <Text small>Last Updated: June 2022</Text>
      <Spacer y={3} />
    </Container>
  );
}
