import React, { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import dynamic from 'next/dynamic';




// const DynamicNav = dynamic(() => import('../components/Navigation'), {
//   ssr: false,
// })

// const DynamicNav = dynamic(() => Promise.resolve(Navigation), {ssr: false})

export const MainLayout = ({ children }) => {


  return (
    <Container fluid>
      <Suspense fallback={`Loading...`}>
      <Navigation />
      {/* <Suspense fallback={`Loading...`}>
        <DynamicNav />
      </Suspense> */}
      {/* <Row>{children}</Row> */}

      {/* <Footer /> */}
      </Suspense>
    </Container>
  );
};
