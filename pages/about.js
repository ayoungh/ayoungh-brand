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

        <Link href="/blog/1">Blog 1</Link>
        <Link href="/blog/2">Blog 1</Link>
        <Link href="/blog/3">Blog 1</Link>
      </Container>
    </>
  );
};

export default About;
