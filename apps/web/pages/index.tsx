
import React from "react";
import { Container, Row, Col, Spacer, Loading, Text, Card } from '@nextui-org/react';

export default function Home() {
  return (
    <Container>
      <Spacer y={1} />
      <Row justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $red500 -5%, $yellow500 90%',
          }}
          weight="bold"
        >
          Hey,
        </Text>
      </Row>
      <Row justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          I'm a Software Engineer
        </Text>
      </Row>
      <Row justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          Based in London
        </Text>
      </Row>
      <Row justify="center">
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $red500 -20%, $red800 100%',
          }}
          weight="bold"
        >
          I am currently rebuilding this site{' '}
          <Loading color="primary"></Loading>
        </Text>
      </Row>
      <Spacer y={1} />

      <Row justify="center">

          <Spacer y={1} />
          <ul>
            <li>Build with NextJS and hosted on Vercel</li>
            <li>Using NextUI and Stiches to style the site</li>
            <li>Using Notion to power the blog pages and soon to power more parts</li>
          </ul>
          <Spacer y={1} />

          <Spacer y={1} />

      </Row>
      <Spacer y={1} />
    </Container>
  );
}
