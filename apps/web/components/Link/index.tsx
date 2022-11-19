import { styled } from '@nextui-org/react';
import React from 'react'



interface LinkProps {
    href: string;
    children: React.ReactNode;
}

export const Link = ({href, children}:LinkProps) => {
  return (
    <StyledA
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
    </StyledA>
  )
};

const StyledA = styled('a', {
    padding: '8px 0',
    display: 'block',
  });
