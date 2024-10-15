import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose lg:prose-xl max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              PreTag="div"
              {...rest}
              style={materialDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
