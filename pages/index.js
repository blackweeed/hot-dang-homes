import { gql } from "@apollo/client";
import client from "client";
import { BlockRender } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";

export default function Home(props) {
  return (
    <div>
      <BlockRender blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `,
  });
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};
