import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recreational Surfacing | Safety Surfaces for Playgrounds",
  description: "Explore Recreational Surfacing, leaders in safety surfaces for playgrounds and recreational areas. Durable, safe, and customizable solutions.",
  icons: {
    icon: "/favicon.ico", ¿
  },
  openGraph: {
    title: "Recreational Surfacing",
    description: "Leaders in safety surfaces for playgrounds and recreational areas.",
    url: "https://recreational-surfacing-beta.vercel.app/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recreational Surfacing - Playground Surfaces",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://recreational-surfacing-beta.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Recreational Surfacing Inc.",
              url: "https://recreational-surfacing-beta.vercel.app/",
              logo: "https://recreational-surfacing-beta.vercel.app/",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-5555",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
