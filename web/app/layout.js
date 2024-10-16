import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>First</h1>
        <Link href={"/second"}>Second へ</Link>
      </body>
    </html>
  );
}
