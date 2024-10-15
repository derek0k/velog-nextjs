import { getPostData } from "@/service/posts";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params: { slug } }: Props) {
  const { title, content } = await getPostData(slug);
  return (
    <>
      <h1>{title}</h1>
      <pre>{content}</pre>
    </>
  );
}
