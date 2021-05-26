import Link from "next/link";
import Head from "next/head";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";

const About = () => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Sidebar />

        <main>
          About me here
        </main>


      </Container>
    </>
  );
};

export default About;
