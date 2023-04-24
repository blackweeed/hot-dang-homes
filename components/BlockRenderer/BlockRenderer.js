import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";

export const BlockRender = ({ blocks }) => {
  return blocks.map((block) => {
    console.log(block.name);
    switch (block.name) {
      case "core/paragraph": {
        return (
          <Paragraph
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.text?.color
            }
            key={block.id}
          />
        );
      }
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
