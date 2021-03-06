import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const MainLayout = ({ children }) => {
  return (
    <Container fluid>
      <Navigation />
      <Row>{children}</Row>

      <Footer />
    </Container>
  );
};
