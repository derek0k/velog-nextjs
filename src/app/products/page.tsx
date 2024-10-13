import { getProducts } from "@/service/products";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <h1>Products Info</h1>
      {products.map((item) => (
        <li key={item.id}>
          <Link href={`/products/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
