import React from 'react';
import { gray } from '@radix-ui/colors';
import {
  Spacer,
  Button,
  Grid,
  Text,
  Link,
  Tooltip,
  styled,
} from '@nextui-org/react';
import { useRouter } from 'next/router';
import NavigationMenu from '@components/NavigationMenu';

const StyledNav = styled('nav', {
  borderBottom: `1px solid ${gray.gray7}`,
  width: '100%',
  marginBottom: '16px',
  position: 'sticky',
  top: '0',
  background: 'url("/bg.png")',
  backgroundRepeat: 'repeat',
  zIndex: '4',
});

export const Navigation = () => {
  const Links = [
    // {
    //   to: '/now',
    //   name: 'Now',
    //   tip: 'What I\'m Doing Now',
    // },
    {
      to: '/about',
      name: 'About',
      tip: 'A Little About me',
    },
    {
      to: '/blog',
      name: 'Blog',
      tip: 'My blog Posts',
    },

    // {
    //   to: '/til',
    //   name: 'TIL',
    //   tip: 'Today I Learnt',
    // },
    // {
    //   to: '/books',
    //   name: 'Books',
    //   tip: 'Books I have read etc',
    // },
  ];

  const router = useRouter();
  return (
    <>
    <StyledNav>
      {Links && (
        <Grid.Container gap={2}>
          <Grid>
            <Tooltip content="ayoungh.co.uk" placement="bottom">
              <Button type="button" color="error" auto light ripple={true}>
                <Link href="/">
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
                </Link>
              </Button>
            </Tooltip>
          </Grid>
          
          <NavigationMenu />

          {/* {React.Children.toArray(
            Links.map((link) => (
              <Grid>
                <Tooltip content={link.tip} placement="bottom">
                  <Button
                    type="button"
                    color="error"
                    auto
                    light
                    ripple={true}
                    shadow={link.to === router.asPath}
                  >
                    <Link href={link.to}>
                      {link.name}
                    </Link>
                  </Button>
                </Tooltip>
              </Grid>
            ))
          )} */}
        </Grid.Container>
      )}
    </StyledNav>
    </>
  );
};
