import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';

export const MainLayout = ({ children }) => {
  const router = useRouter();
  console.log('router: ', router);
  return (
    <Container fluid>
      <Navigation />
      <Row>{children}</Row>
      {!router.asPath.match(/blog/gi) && <Footer />}
    </Container>
  );
};
