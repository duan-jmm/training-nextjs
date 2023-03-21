import Link from "next/link";

export function Navbar({ title }) {
  return (
    <ul>
      <li>{title}</li>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <a href={"/product"}>Products</a>
      </li>
    </ul>
  );
}
