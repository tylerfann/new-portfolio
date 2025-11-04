import NavBar from "@/components/NavBar";
import "./globals.css";
import { Lato } from "next/font/google";
const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/30783d8b54.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`p-10 ${lato.className}`}>
        <div className="flex justify-center">
          <NavBar />
        </div>
        <div className="flex justify-center mt-10">{children}</div>
      </body>
    </html>
  );
}
