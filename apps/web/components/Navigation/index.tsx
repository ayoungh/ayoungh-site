import React from 'react';
import { Spacer, Button, Grid, Text, Link, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const Links = [
    {
      to: '/now',
      name: 'Now',
      tip: 'What is happening Now',
    },
    {
      to: '/about',
      name: 'About',
      tip: 'About me',
    },
    {
      to: '/blog',
      name: 'Blog',
      tip: 'My blog Posts',
    },
    {
      to: '/til',
      name: 'TIL',
      tip: 'Today I Learnt',
    },
    {
      to: '/books',
      name: 'Books',
      tip: 'Books I have read etc',
    },
  ];


const router = useRouter();
  return (
    <>
      <nav>
        {Links && (
          <Grid.Container gap={2}>
            <Grid>
              <Tooltip content="ayoungh.co.uk" placement="bottom">
                <Button type="button" color="primary" auto light ripple={true}>
                  <Link href="/">
                    <a>
                      <Text
                        h1
                        size={25}
                        css={{
                          textGradient: '45deg, $black -20%, $red500 50%',
                        }}
                        weight="bold"
                      >
                        Anthony Young
                      </Text>
                    </a>
                  </Link>
                </Button>
              </Tooltip>
            </Grid>
            {React.Children.toArray(
              Links.map((link) => (
                <Grid>
                  <Tooltip content={link.tip} placement="bottom">
                    <Button
                      type="button"
                      color="primary"
                      auto
                      light
                      ripple={true}
                      shadow={link.to === router.asPath}
                    >
                      <Link href={link.to}>
                        <a>{link.name}</a>
                      </Link>
                    </Button>
                  </Tooltip>
                </Grid>
              ))
            )}
          </Grid.Container>
        )}
      </nav>
      <Spacer y={4} />
    </>
  );
};
