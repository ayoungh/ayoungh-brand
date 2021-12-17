import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import styled from "styled-components";
import Head from "next/head";

interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <StyledMain className="h-screen flex overflow-hidden bg-gray-400">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            {children}
          </main>
        </div>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.div`
  background-image: url('https://source.unsplash.com/user/ayoungh');
  background-repeat: no-repeat;
  background-size: cover;
`;

