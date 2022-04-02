import React from 'react';
import { Text, Link, Row, Col, styled, Spacer } from '@nextui-org/react';
import Icon from '@components/SocialIcons';
import { Activities } from '@components/Activities';
import { Listening } from '@components/Listening';

// @ts-ignore
const StyledFooter = styled('footer', {
  width: '100%',
});

export const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <Col>
          <Row justify="center">
            <Listening />
          </Row>
        </Col>
        <Col>
          <Row justify="center">
            <Activities />
          </Row>
        </Col>
      </Row>
      <Spacer x={2} />
      <Row justify="center">
        <Link
          href="https://www.instagram.com/ayoungh/"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="instagram" />
        </Link>
        <Link
          href="https://twitter.com/ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="twitter" />
        </Link>
        <Link
          href="https://codepen.io/ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="codepen" />
        </Link>
        <Link
          href="https://dribbble.com/ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="dribbble" />
        </Link>
        <Link
          href="https://github.com/ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ayoungh/"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="linkedin" />
        </Link>
        <Link
          href="https://medium.com/@ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="medium" />
        </Link>
        <Link
          href="https://www.pinterest.co.uk/ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="pinterest" />
        </Link>
        <Link
          href="https://open.spotify.com/user/ayoungh"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="spotify" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC3HauKwKSTTXzw-XLH9rMEQ"
          target="_blank"
          css={{ width: '30px' }}
        >
          <Icon fgColor="#de3a3a" networkKey="youtube" />
        </Link>
      </Row>
      <Row justify="center">
        <Text small>
          &copy; Copyright. Anthony Young - {new Date().getFullYear()} -
          ayoungh.co.uk
        </Text>
      </Row>
    </StyledFooter>
  );
};
