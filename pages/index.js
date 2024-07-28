import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
