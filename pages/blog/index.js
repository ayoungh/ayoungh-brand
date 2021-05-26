import { getDatabase } from "../../libs/notion";
import Link from "next/link";
import Head from "next/head";
import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import Text from "./[blogid].js";

const Blog = ({ posts }) => {
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

        <ol>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id}>
                <h3>
                  <Link href={`/blog/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p>{date}</p>
                <Link href={`/blog/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </>
  );
};

export default Blog;

export const databaseId = process.env.NOTION_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
