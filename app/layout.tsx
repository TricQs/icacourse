import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bimbel-icacourse.com"),
  title: "ICA Course | Bimbel Privat SD, SMP, SMA & Persiapan UTBK",
  description:
    "ICA Course menyediakan bimbingan belajar privat untuk SD, SMP, SMA, persiapan UTBK, CPNS, dan bahasa Inggris dengan tutor berpengalaman.",
  keywords: [
    "bimbel terdekat",
    "les privat",
    "guru privat",
    "les matematika",
    "bimbel SD",
    "bimbel SMP",
    "bimbel SMA",
    "bimbel UTBK",
    "kursus bahasa Inggris",
    "les online",
    "ICA Course",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ICA Course | Bimbel Privat SD, SMP, SMA & Persiapan UTBK",
    description:
      "ICA Course menyediakan bimbingan belajar privat untuk SD, SMP, SMA, persiapan UTBK, CPNS, dan bahasa Inggris dengan tutor berpengalaman.",
    url: "https://bimbel-icacourse.com",
    siteName: "ICA Course",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICA Course | Bimbel Privat SD, SMP, SMA & Persiapan UTBK",
    description:
      "ICA Course menyediakan bimbingan belajar privat untuk SD, SMP, SMA, persiapan UTBK, CPNS, dan bahasa Inggris dengan tutor berpengalaman.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ICA Course",
    url: "https://bimbel-icacourse.com",
    description:
      "Bimbingan belajar privat untuk SD, SMP, SMA, persiapan UTBK, CPNS, dan bahasa Inggris dengan tutor berpengalaman.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281513092400",
      contactType: "customer service",
    },
  };

  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
