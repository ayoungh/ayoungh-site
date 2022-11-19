import { Fragment } from 'react';
import Head from 'next/head';
import { getDatabase, getPage, getBlocks } from '../../libs/notion';
import Link from 'next/link';
import { databaseId } from '.';
import slugify from 'slugify';
import { Spacer, Button, Grid, Text, Tooltip, Container } from '@nextui-org/react';
import Image from 'next/image';

export const T = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, inx) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <Text
        key={inx}
        b={bold}
        className={[
          bold ? '' : '',
          code ? '' : '',
          italic ? '' : '',
          strikethrough ? '' : '',
          underline ? '' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </Text>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  console.log('------');
  console.log('type: ', type);
  console.log('block: ', block);
  const text = value.rich_text;
  console.log('rich_text::', text);

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <T text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <T text={text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <T text={text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <T text={text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return text.length > 0 && <li>{text[0].text.content}</li>;
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <T text={value.text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <T text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;

    case 'image':
      return <Image src={value.external.url} layout="fill" />;
      return <p>Image here: {JSON.stringify(value, 2, null)}</p>;

    case 'divider':
      return <hr />;

    case 'quote':
      return <Text blockquote>{value.text[0].text.content} </Text>;
    // {
    //   JSON.stringify(value, 2, null);
    // }

    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  console.log(page, blocks);
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        css={{
          minHeight: 'calc(100vh - 140px)',
        }}
      >
        <article>
          <h1>
            <Text text={page.properties.Name.title} />
          </h1>
          <section>
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <Link href="/blog">
              ← Go home
            </Link>
          </section>
        </article>
      </Container>
    </>
  );
}

// export const databaseId = process.env.NOTION_DATABASE_ID;

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);

  const paths = [];

  database.forEach((result) => {
    console.log(
      '>> result:',
      result.properties.Name.title[0].plain_text,
      result.properties
    );
    if (result.properties.Live.checkbox)
      paths.push({
        params: {
          slug: slugify(
            result.properties.Name.title[0].plain_text
          ).toLowerCase(),
        },
      });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const database = await getDatabase(databaseId);
  const page = database.find((result) => {
    const { Name } = result.properties;
    const resultSlug = slugify(Name.title[0].plain_text).toLowerCase();
    return resultSlug === slug;
  });

  const blocks = await getBlocks(page.id);
  console.log('blocks: ', blocks);

  // const blocks = await notion.blocks.children.list({
  //   block_id: page.id,
  // });

  return {
    props: {
      page: page,
      blocks: blocks,
    },
  };
};

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   //slugify(page.properties.Name.title[0].plain_text).toLowerCase()
//   return {
//     paths: database.map((page) => {
//       console.log(page.properties.Name.title[0].plain_text);
//       return {
//         params: {
//           slug: slugify(page.properties.Name.title[0].plain_text).toLowerCase(),
//         },
//       };
//     }),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   console.log(context.params);
//   const { slug } = context.params;

//   // get the page id
//   const page = await getPage(slug);
//   const blocks = await getBlocks(blogid);

//   // Retrieve block children for nested blocks (one level deep), for example toggle blocks
//   // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
//   const childBlocks = await Promise.all(
//     blocks
//       .filter((block) => block.has_children)
//       .map(async (block) => {
//         console.log(block.id, block.title)
//         return {
//           id: block.id,
//           children: await getBlocks(block.id),
//         };
//       })
//   );
//   const blocksWithChildren = blocks.map((block) => {
//     // Add child blocks if the block should contain children but none exists
//     if (block.has_children && !block[block.type].children) {
//       block[block.type]["children"] = childBlocks.find(
//         (x) => x.id === block.id
//       )?.children;
//     }
//     return block;
//   });

//   return {
//     props: {
//       page,
//       blocks: blocksWithChildren,
//     },
//     revalidate: 1,
//   };
// };
