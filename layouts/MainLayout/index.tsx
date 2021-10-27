import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import classnames from "classnames";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <StyledMain className="h-screen flex overflow-hidden bg-gray-400">
      {/* sidebar here */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  background-image: url('https://source.unsplash.com/user/ayoungh');
  background-repeat: no-repeat;
  background-size: cover;
`;

