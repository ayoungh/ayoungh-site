import { useRouter } from 'next/router';
import classnames from 'classnames';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

import {
  CalendarIcon,
  HomeIcon,
  XIcon,
  DocumentReportIcon,
} from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import NowPlaying from '../Spotify';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/blog', icon: DocumentReportIcon },
  { name: 'About', href: '/about', icon: CalendarIcon },
];

const Sidebar = ({ sidebarOpen = false, setSidebarOpen }: Props) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <StyledSidebar className="relative flex-1 flex flex-col max-w-xs w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <Sidebar.Inner />
            </StyledSidebar>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <StyledSidebar className="flex flex-col h-0 flex-1">
            <Sidebar.Inner />
          </StyledSidebar>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/display-name
Sidebar.Inner = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          Anthony Young
        </div>
        <nav className="mt-5 flex-1 space-y-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={classnames(
                  router.asPath === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center py-2 text-sm font-medium px-2'
                )}
              >
                <item.icon
                  className={classnames(
                    router.asPath === item.href
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-shrink-0 flex flex-col border-t border-gray-100 p-4">
        <NowPlaying />
      </div>
    </>
  );
};

const StyledSidebar = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

export default Sidebar;
