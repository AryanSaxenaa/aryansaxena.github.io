import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Current timestamp to force cache refresh
const timestamp = new Date().getTime()

export const metadata: Metadata = {
  title: "Aryan Saxena | Computer Engineering Student & Developer",
  description:
    "Portfolio of Aryan Saxena, a Computer Engineering student and full-stack developer building innovative solutions.",
  metadataBase: new URL("https://damilareoo.xyz"),
  openGraph: {
    title: "Aryan Saxena | Computer Engineering Student & Developer",
    description:
      "Portfolio of Aryan Saxena, a Computer Engineering student and full-stack developer building innovative solutions.",
    url: "https://damilareoo.xyz",
    siteName: "Aryan Saxena | Portfolio",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Aryan Saxena",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Saxena | Computer Engineering Student & Developer",
    description:
      "Portfolio of Aryan Saxena, a Computer Engineering student and full-stack developer building innovative solutions.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@damilare_oo",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force refresh of social media cache with timestamp */}
        <meta property="og:image" content={`https://damilareoo.xyz/images/og-image.png?v=${timestamp}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Aryan Saxena" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content={`https://damilareoo.xyz/images/og-image.png?v=${timestamp}`} />
        <meta name="twitter:image:alt" content="Aryan Saxena" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content={`https://damilareoo.xyz/images/og-image.png?v=${timestamp}`} />

        {/* Additional social media tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://damilareoo.xyz" />
        <meta property="og:title" content="Aryan Saxena | Computer Engineering Student & Developer" />
        <meta
          property="og:description"
          content="Portfolio of Aryan Saxena, a Computer Engineering student and full-stack developer building innovative solutions."
        />
        <meta property="og:site_name" content="Aryan Saxena | Portfolio" />

        {/* Cache control for better refreshing */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
