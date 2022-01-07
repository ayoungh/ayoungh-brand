import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import styled from "styled-components";
import Head from "next/head";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

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
      <ThemeProvider>
        <Container className="h-screen">
          <div className="col-start-2 col-span-10 border bg-white dark:bg-black">
            {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
            <Header setSidebarOpen={setSidebarOpen} />
            <main className="">{children}</main>
            <Footer />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

// const StyledMain = styled.div`
//   background-image: url('https://source.unsplash.com/user/ayoungh');
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

