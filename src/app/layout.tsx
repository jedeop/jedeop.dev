import type { Metadata } from "next";
import "./globals.css";

import { Noto_Serif_KR } from 'next/font/google'

const noto_serif = Noto_Serif_KR({
  variable: "--font-noto"
})

export const metadata: Metadata = {
  title: "박재원",
  description: "더 밝고 따듯한 세상을 위해, 사회와 정치에 기여하는 방법을 모색 중인 공학도입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_serif.variable} font-serif antialiased m-8`}
      >
        {children}
      </body>
    </html>
  );
}
