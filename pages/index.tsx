
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import NowPlaying from '../components/Spotify';

const Home = () => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Container>

          <div className="dashboard-image col-start-1 col-end-13 row-span-full container-image">
            <div className="grid gap-4 grid-cols-[main] min-h-screen">
              <Card classes="rounded shadow-2xl min-w-full h-24 bg-gray-200 px-8 py-8 col-span-2 col-start-2 row-start-3">
                Strava card - pulling run data from api
                <h2>100 Miles</h2>
              </Card>


              <Card classes="rounded shadow-2xl min-w-full h-24 bg-gray-200 px-8 py-8 col-span-2 row-start-3">
                OuraRing data - pull from dashboard api
              </Card>
              <Card classes="rounded shadow-2xl min-w-full h-24 bg-gray-200 px-8 py-8 col-span-2 row-start-3">
                OuraRing data - pull from dashboard api
              </Card>
              <Card classes="rounded shadow-2xl min-w-full h-24 bg-gray-200 px-8 py-8 col-span-2 row-start-3">
                OuraRing data - pull from dashboard api
              </Card>
            </div>
            <footer className={styles.footer + " bg-gray-200"}>
              <a
                href="https://vercel.com?utm_source=fan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proudly Powered by{" "}
                <img
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.logo}
                />
              </a>
            </footer>
          </div>
        </Container>
      </MainLayout>
    </>
  );
}

export default Home;