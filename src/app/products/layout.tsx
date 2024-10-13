import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fancy Products | All Products",
  description: "Checkout Fancy Clothes",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/products/women">Women's</Link>
        <Link href="/products/man">Men's</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
