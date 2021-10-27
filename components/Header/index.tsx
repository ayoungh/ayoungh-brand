import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from '@heroicons/react/outline';

interface Props {
    setSidebarOpen: (sidebarOpen: boolean) => void;
}

export default function Header({ setSidebarOpen }:Props) {
  return (
    <StyledHeader className="pl-1 pt-1 sm:pl-3 sm:pt-3 h-16 shadow">
      <button
        className="md:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="md:hidden inline-flex px-2">Anthony Young</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
`;
