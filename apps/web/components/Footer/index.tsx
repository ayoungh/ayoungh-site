import React from 'react';
import { Spacer, Button, Grid, Text, Link, Tooltip } from '@nextui-org/react';

export const Footer = () => {
  return (
    <footer>
      <Text small>
        &copy; Copyright. Anthony Young - {new Date().getFullYear()} -
        ayoungh.co.uk
      </Text>
    </footer>
  );
};
