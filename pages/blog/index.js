import { getDatabase } from "../../libs/notion";
import Link from "next/link";
import Head from "next/head";
import Container from "../../components/Container";
import Text from "./[slug].js";
import MainLayout from "../../layouts/MainLayout"
import slugify from 'slugify';

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Container>

          {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}

          <ol>
            {posts.map((post) => {
              console.log(post.properties.Name.title[0].plain_text);
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
                  <Link
                    href={`/blog/${slugify(
                      post.properties.Name.title[0].plain_text
                    ).toLowerCase()}`}
                  >
                    <a> Read post →</a>
                  </Link>
                </li>
              );
            })}
          </ol>
        </Container>
      </MainLayout>
    </>
  );
};

export default Blog;

export const databaseId = process.env.NOTION_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  // const page = database.find((result) => {
  //   const { Name } = result.properties;
  //   const resultSlug = slugify(Name.title[0].plain_text).toLowerCase();
  //   return resultSlug === slug;
  // });


  // const blocks = await notion.blocks.children.list({
  //   block_id: page.id,
  // });

  return {
    props: {
      posts: database,
    },
  };  

  // const paths = [];

  // database.forEach((result) => {
  //   console.log('result:', result.properties.Name);
  //   // if (result.type === "child_page") {
  //     paths.push({
  //       params: {
  //         slug: slugify(result.properties.Name).toLowerCase(),
  //       },
  //     });
  //   // }
  // });

  // console.log('db: ', database)

  return {
    props: {
      posts: database,
      // paths
    },
    revalidate: 1,
  };
};
