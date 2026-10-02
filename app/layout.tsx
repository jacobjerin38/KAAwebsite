import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaatechnologies.qa"),
  title: "KAA Software & Technologies | ERP, Business Software & IT Solutions in Qatar",
  description:
    "Qatar’s full-stack digital partner for ERP, business software, web and mobile development, cybersecurity, cloud solutions, IT support and digital growth services.",
  alternates: { canonical: "/" },
  keywords: [
    "KAA Technologies",
    "ERP Qatar",
    "ERP Software Qatar",
    "Business Software Qatar",
    "CRM Qatar",
    "HRMS Qatar",
    "Inventory Management Qatar",
    "IT Support Qatar",
    "Cybersecurity Qatar",
    "Cloud Solutions Qatar",
    "Web Development Qatar",
    "Digital Transformation Qatar",
  ],
  authors: [{ name: "KAA Software and Technologies" }],
  creator: "KAA Software and Technologies",
  publisher: "KAA Software and Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kaatechnologies.qa/",
    title: "KAA Software & Technologies | Qatar’s Full-Stack Digital Partner",
    description:
      "Empowering businesses with Smart IT & Software Solutions. Qatar-based IT company offering software development, web & mobile apps, IT infrastructure, cloud security, and digital marketing.",
    siteName: "KAA Software and Technologies",
    images: [{ url: "/kaa-screenshot.jpg", width: 1024, height: 716, alt: "KAA ERP platform preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAA Software & Technologies | Qatar’s Full-Stack Digital Partner",
    description: "ERP, business software and digital services for businesses in Qatar.",
    images: ["/kaa-screenshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className="antialiased bg-space-void text-slate-200 overflow-x-hidden"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KAA Software and Technologies",
              url: "https://www.kaatechnologies.qa/",
              logo: "https://www.kaatechnologies.qa/kaa-logo.png",
              email: "info@kaatechnologies.qa",
              telephone: "+974 5571 1741",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Doha",
                addressCountry: "QA",
              },
              sameAs: ["https://www.instagram.com/kaatechnologies"],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
