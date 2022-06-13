
import React from "react";
import { Container, Row, Col, Spacer, Loading, Text, Card } from '@nextui-org/react';
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
          minHeight: 'calc(100vh - 140px)',
        }}
      >
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

        <Spacer y={3} />

        <Row justify="center">
          <Spacer y={1} />
          <ul>
            <li>This site is Built with NextJS and hosted on Vercel</li>
            <li>Using NextUI and Stiches to style the site</li>
            <li>
              Using Notion to power the blog pages and soon to power more parts of the site
            </li>
          </ul>
          <Spacer y={1} />

          <Spacer y={1} />
        </Row>
        <Spacer y={1} />
      </Container>
    </>
  );
}
