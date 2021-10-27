import Link from "next/link";
import Head from "next/head";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layouts/MainLayout"

const About = () => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Container>
          <main>About me here</main>
        </Container>
      </MainLayout>
    </>
  );
};

export default About;
