import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';
import Container from '@components/Container';

type MainLayoutProps = {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const router = useRouter();
  return (
    <Container>
      <Navigation />
      {children}
      {!router.asPath.match(/blog/gi) && <Footer />}
    </Container>
  );
};
