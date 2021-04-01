
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Sidebar />

        <div className="col-start-3 col-end-13 row-span-full">
          Main
          <div className="grid gap-4 grid-cols-[main] min-h-screen">
            <Card classes="rounded shadow-2xl min-w-full h-24 bg-gray-200 px-8 py-8 col-span-2 col-start-2 row-start-3">
              Strava card - pulling run data from api
            </Card>
            <Card classes="rounded shadow-2xl min-w-full h-24 bg-gray-200 px-8 py-8 col-span-2 row-start-3">
              Spotify last played - pulling from the api
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
          <footer className={styles.footer}>
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
    </>
  );
}

export default Home;