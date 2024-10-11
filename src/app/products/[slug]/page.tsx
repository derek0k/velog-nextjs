import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `Fancy Product ${params.slug}`,
  };
}

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export default function Product({ params: { slug } }: Props) {
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }
  return <div>{product} Info</div>;
}

export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
