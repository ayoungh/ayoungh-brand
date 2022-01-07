import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from '@heroicons/react/outline';
import Navigation from '../Navigation';
import Link from 'next/link';

interface Props {
    setSidebarOpen: (sidebarOpen: boolean) => void;
}

export default function Header({ setSidebarOpen }:Props) {
  return (
    <header className="h-16 w-full shadow flex">

      {/* <button
        className="md:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button> */}
      {/* eslint-disable-next-line @next/next/link-passhref */}
      <div className="">
        <Link href="/">
          <div className="inline-flex px-2">Anthony Young</div>
        </Link>
      </div>
      <div className="">
        <Navigation />
      </div>

    </header>
  );
};

// const StyledHeader = styled.div`
//   background-color: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(5px);
// `;
