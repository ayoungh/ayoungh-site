// import { Button } from "ui";
// import { Navigation } from 'ui';

import Head from 'next/head';
import { getDatabase } from '../../libs/notion';
import {
  Container,
  Grid,
  Spacer,
  Loading,
  Text,
  Card,
} from '@nextui-org/react';
import Link from 'next/link';
import slugify from 'slugify';

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Anthony Young - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Text
          h2
          size={25}
          css={{
            textGradient: '45deg, $red500 50%, $blue500 30%',
          }}
          weight="bold"
        >
          Blog
        </Text>
        <Spacer y={2} />
        <Text>More to come soon, this is powered by a Notion Database. </Text>
        <Grid.Container gap={3}>
          {posts.map((post) => {
            //   console.log(post.properties.Name.title[0].plain_text);
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              }
            );

            const {
              properties: {
                Name: { title },
                Created: { created_time },
              },
            } = post;
            console.log('>>', created_time, title[0].plain_text, '<<');

            return (
              <Grid xs={12} md={6} key={post.id}>
                <Card>
                  <h3>
                    {/* <Link href={`/blog/${post.id}`}> */}
                      {/* <a> */}
                        <Text>{title[0].plain_text}</Text>
                      {/* </a> */}
                    {/* </Link> */}
                  </h3>

                  <p>{date}</p>
                  {/* <Link
                    href={`/blog/${slugify(
                      post.properties.Name.title[0].plain_text
                    ).toLowerCase()}`}
                  >
                    <a> Read post →</a>
                  </Link> */}
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
        <Spacer y={2} />
      </Container>
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
