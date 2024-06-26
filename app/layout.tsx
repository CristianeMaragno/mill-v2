import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from "@clerk/localizations";
import { ModalProvider } from '@/components/modal-provider';
import { ToasterProvider } from '@/components/toaster-provider';
import { ConfettiProvider } from '@/components/confetti-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plante Riqueza - Suas finanças em dia',
  description: 'Generated by create next app',
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Cristiane R. Maragno" },
    {
      name: "Cristiane R. Maragno",
      url: "linkedin.com/in/cristiane-rodrigues-maragno",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "ios/192.png" },
    { rel: "icon", url: "android/android-launchericon-192-192.png" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //The ClerkProvider encapsulates the document body, where all pages are rendered, allowing it to effectively manage user authentication. Within the middleware file, you'll discover both public and protected routes that define the application's navigation pathways.
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={inter.className}>
          <ModalProvider/>
          <ToasterProvider/>
          <ConfettiProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
