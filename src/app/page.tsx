import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
