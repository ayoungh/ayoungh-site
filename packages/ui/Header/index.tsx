import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from '@heroicons/react/outline';
import Navigation from '../Navigation';
import Link from 'next/link';
import useScroll from '../../hooks/useScroll';

interface Props {
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

export default function Header({ setSidebarOpen }: Props) {

  const scroll = useScroll();

  console.log(scroll)

  return (
    <header
      className={`h-16 col-span-full flex border-red-800 bg-gray-500 fixed justify-between ${
        scroll.scrollY > 60 ? ' border-b' : ''
      }`}
    >
      {/* <button
        className="md:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button> */}
      {/* eslint-disable-next-line @next/next/link-passhref */}
      <div className="flex pr-5">
        <Link href="/">
          <a className="whitespace-nowrap py-4 px-3">Anthony Young</a>
        </Link>
      </div>
      <div className="flex">
        <Navigation />
      </div>
    </header>
  );
}

// const StyledHeader = styled.div`
//   background-color: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(5px);
// `;
