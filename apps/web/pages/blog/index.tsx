import Head from 'next/head';
import { getDatabase } from '../../libs/notion';
import {
  Container,
  Grid,
  Spacer,
  Loading,
  Text,
  Card,
  Row,
  Col,
} from '@nextui-org/react';
import Link from 'next/link';
import slugify from 'slugify';

const Blog = ({ posts }) => {
  console.log('posts: ', posts);
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
                Live: { checkbox: isLive}
              },
              cover,
            } = post;
            console.log('>>', cover, isLive, '<<');

            return isLive && (
              <Grid xs={12} sm={6} key={post.id}>
                <Card cover={Boolean(cover)} animated hoverable clickable>
                  <Card.Body css={{ p: 0, minHeight: '160px' }}>
                    <Link
                      href={`/blog/${slugify(
                        post.properties.Name.title[0].plain_text
                      ).toLowerCase()}`}
                    >
                      <a>
                        {cover && cover.external ? (
                          <Card.Image
                            src={cover.external.url}
                            height={340}
                            width="100%"
                            alt="Card image background"
                          />
                        ) : null}

                        <Card.Footer
                          blur
                          css={{
                            position: 'absolute',
                            bgBlur: '#0f1114',
                            bottom: 0,
                            zIndex: 1,
                          }}
                        >
                          <Row>
                            <Col>
                              <Row>
                                <Col>
                                  <Text color="#d1d1d1" size={16}>
                                    {title[0].plain_text}
                                  </Text>
                                  <Text color="#d1d1d1" size={12}>
                                    {date}
                                  </Text>
                                  Read post →
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </a>
                    </Link>
                  </Card.Body>
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
