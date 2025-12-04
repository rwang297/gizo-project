import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasuwan Gizo - Africa's Premier MSME Marketplace Platform",
  description:
    "Join Africa's #1 MSME platform. Get your business page, access training, connect with stakeholders, and grow digitally. 15,000+ active businesses generating N2.5B+ revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Early-run script to detect whether client fetch works. This runs before React hydration
            so we can set a global flag used by client components to decide whether to use
            full-page navigation fallbacks. This helps avoid RSC fetch failures when a 3rd-party
            script monkey-patches fetch and breaks Next's client routing. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(typeof window==='undefined')return;try{fetch('/favicon.ico',{method:'HEAD',cache:'no-store',credentials:'same-origin'}).then(function(){window.__RSC_OK=true;try{localStorage.removeItem('forceFullNav')}catch(e){}},function(err){window.__RSC_OK=false;try{localStorage.setItem('forceFullNav','1')}catch(e){};console.warn('Client fetch check failed - falling back to full page navigation.');});}catch(e){window.__RSC_OK=false;try{localStorage.setItem('forceFullNav','1')}catch(e){};}}catch(e){console.warn(e);}})();`,
          }}
        />

        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
