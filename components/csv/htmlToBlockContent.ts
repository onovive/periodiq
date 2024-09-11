import { ReactElement } from "react";
import htmlToReact from "html-to-react";
import { v4 as uuidv4 } from "uuid";
import { Parser } from "html-to-react";
const htmlToReactParser: any = new (htmlToReact as any).Parser();

function convertHtmlToBlockContent(html: string): any[] {
  const reactElement = htmlToReactParser.parse(html);
  return ensureArray(flattenBlocks(reactToBlocks(reactElement)));
}

function reactToBlocks(element: ReactElement | string): any[] {
  if (typeof element === "string") {
    return [{ _type: "block", _key: uuidv4(), children: [{ _type: "span", text: element.trim() }] }];
  }

  if (Array.isArray(element)) {
    return element.flatMap(reactToBlocks);
  }

  if (typeof element === "object" && element !== null) {
    const { type, props } = element;

    if (typeof type === "string") {
      switch (type) {
        case "p":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
          return [
            {
              _type: "block",
              _key: uuidv4(),
              style: type,
              children: reactToBlocks(props.children).flatMap((child) => child.children),
            },
          ];
        case "strong":
        case "b":
          return reactToBlocks(props.children).map((child) => ({
            ...child,
            children: child.children.map((span: any) => ({ ...span, marks: [...(span.marks || []), "strong"] })),
          }));
        case "em":
        case "i":
          return reactToBlocks(props.children).map((child) => ({
            ...child,
            children: child.children.map((span: any) => ({ ...span, marks: [...(span.marks || []), "em"] })),
          }));
        case "a":
          return reactToBlocks(props.children).map((child) => ({
            ...child,
            children: child.children.map((span: any) => ({
              ...span,
              marks: [
                ...(span.marks || []),
                {
                  _type: "link",
                  href: props.href,
                },
              ],
            })),
          }));
        default:
          return reactToBlocks(props.children);
      }
    }
  }

  return [];
}

function flattenBlocks(blocks: any): any[] {
  return blocks.flatMap((block: any) => {
    if (block._type === "block") {
      return {
        ...block,
        _key: block._key || uuidv4(),
        children: ensureArray(block.children).map((child) => ({
          ...child,
          _key: child._key || uuidv4(),
        })),
      };
    }
    return block;
  });
}

function ensureArray(item: any): any[] {
  return Array.isArray(item) ? item : [item];
}

export default convertHtmlToBlockContent;
