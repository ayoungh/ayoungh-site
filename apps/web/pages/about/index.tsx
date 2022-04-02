import { Text, Spacer, Container } from '@nextui-org/react';

export default function About() {
  return (
    <Container       css={{
        minHeight: 'calc(100vh - 140px)',
      }}>
      <Text
        h2
        size={25}
        css={{
          textGradient: '45deg, $red500 50%, $blue500 30%',
        }}
        weight="bold"
      >
        About Me
      </Text>
      <Spacer y={3} />
      <Text>Hey, I will be updating this section more soon but the down low:</Text>
      <Text>I'm a Software Engineer working full time based in London.</Text>
      <Text>I've been working in the web world for over 10 years. I started out doing graphic design and slowly edged into the coding side after building interactive projects in flash back in the day.</Text>
      <Text>I then got into building tests (AB testing) on websites using jQuery and my world blew up. How much I could do using Javascript.</Text>
      <Spacer y={3} />
    </Container>
  );
}
