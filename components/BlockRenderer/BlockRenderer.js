import { Cover } from "components/Cover";
import { Heading } from "components/Heading";

export const BlockRender = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/cover": {
        console.log(block);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRender blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
