import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';
import { Navigation } from '../components/Navigation';

export const MainLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Navigation />
      </Row>
      <Row>{children}</Row>
      <Row justify="center">
        <footer>2022 - ayoungh.co.uk</footer>
      </Row>
    </Container>
  );
};
