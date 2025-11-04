import NavBar from "@/components/NavBar";
import "./globals.css";
import { Lato } from 'next/font/google'
const lato = Lato({
  weight: ['400'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-10 ${lato.className}`}>
        <div className="flex justify-center">
          <NavBar />
        </div>
        <div className="flex justify-center mt-20">
        {children}
        </div>
      </body>
    </html>
  );
}
