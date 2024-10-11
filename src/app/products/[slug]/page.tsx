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

export default function Page({ params }: Props) {
  return <div>{params.slug}</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
