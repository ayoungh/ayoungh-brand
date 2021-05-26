import Link from "next/link";
import Head from "next/head";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";

const CodeCards = () => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Sidebar />

        <main>
          code codes will go here

        </main>
      </Container>
    </>
  );
};

export default CodeCards;
