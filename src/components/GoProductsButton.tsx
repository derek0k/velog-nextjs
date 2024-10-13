"use client";

import { useRouter } from "next/navigation";

export default function GoProductsButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/products")}>Go To Products</button>
  );
}
