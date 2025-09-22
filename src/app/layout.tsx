import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
import Analytics from '@/components/gtmComponent';
import { Suspense } from 'react'
import Navbar from "@/components/navbar/NavbarR";

export const metadata: Metadata = {
  applicationName:"AuthCor",
  title: "Expert Care For Your Data center",
  description: "With AuthCor as your partner, you can focus on your core business while we handle the complexities of your data center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

<meta property="og:url" content="https://www.authcor.com/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Expert Care For Your Data center"/>
<meta property="og:description" content="With AuthCor as your partner, you can focus on your core business while we handle the complexities of your data center."/>
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/6bc18ed7-c9a1-4ad4-a0e6-c54c147df752.png?token=KpXuVROKjw_jIL6ynXFITBGZVQccHyzkMnJpZ34hdXs&height=671&width=1200&expires=33270269977"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="authcor.com"/>
<meta property="twitter:url" content="https://www.authcor.com"/>
<meta name="twitter:title" content="Expert Care For Your Data center"/>
<meta name="twitter:description" content="With AuthCor as your partner, you can focus on your core business while we handle the complexities of your data center."/>
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/6bc18ed7-c9a1-4ad4-a0e6-c54c147df752.png?token=KpXuVROKjw_jIL6ynXFITBGZVQccHyzkMnJpZ34hdXs&height=671&width=1200&expires=33270269977"/>

      </head>
      <Suspense>

    <Analytics/>
      </Suspense>
      <body
        className={`antialiased`}
        >
          

              <Navbar/>

             {children}
      </body>
    </html>
  );
}
