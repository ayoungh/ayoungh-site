
import React from "react";
import { Container, Row, Col, Spacer, Text, } from '@nextui-org/react';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Anthony Young</title>
        <meta name="title" content="Anthony Young" />
        <meta
          name="description"
          content="Software Engineer Based in London. "
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ayoungh.co.uk/" />
        <meta property="og:title" content="Anthony Young" />
        <meta
          property="og:description"
          content="Software Engineer Based in London. "
        />
        <meta property="og:image" content="/snap.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ayoungh.co.uk/" />
        <meta property="twitter:title" content="Anthony Young" />
        <meta
          property="twitter:description"
          content="Software Engineer Based in London. "
        />
        <meta property="twitter:image" content="/snap.png"></meta>
      </Head>

      <Container
        css={{
          minHeight: 'calc(100vh - 240px)',
        }}
      >

        <Spacer y={1} />
        <Row>
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $red500 -5%, $yellow500 90%',
            }}
            weight="bold"
          >
            Hey 👋,
          </Text>
        </Row>
        <Row>
          <Text
            h1
            size={55}
            css={{
              textGradient: '45deg, $blue500 -20%, $red500 100%',
            }}
            weight="bold"
          >
            I'm a Software Engineer
          </Text>
        </Row>
        <Row>
          <Text
            h1
            size={50}
            css={{
              textGradient: '45deg, $blue500 -20%, $red500 100%',
            }}
            weight="bold"
          >
            Based in London.
          </Text>
        </Row>

        <Spacer y={3} />
          <Text>Welcome to my personal website.</Text>
          <Text>This website is built using NextJS, hosted on Vercel and pulling blog posts from Notion. </Text>
          <Text>I am very slowly working on updating this with various bits of information.</Text>
          <Spacer y={2} />
          <Text>Check out some more about me on the about page.</Text>
        <Spacer y={1} />
      </Container>
    </>
  );
}
