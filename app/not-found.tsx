import Link from "next/link";

export default function NotFount() {
  return (
    <>
      <h1>Not found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </>
  );
}
