import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  const posts: Post[] = JSON.parse(data);

  // 게시물을 최신순으로 정렬함
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`Doesn't exist file name : ${fileName} `);

  const index = posts.indexOf(post);
  // 최신 순으로 정렬되어 있으므로, 다음 페이지는 인덱스 -1에 해당한다
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await fs.readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
