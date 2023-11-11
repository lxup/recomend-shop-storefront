import Providers from "@modules/providers"
import "styles/globals.css"
import { siteConfig } from "../../config/site";
import { Metadata } from "next";

export const viewports = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: '/manifest.webmanifest',
  icons: {
    apple: '/icons/icon-512x512.png',
  },
  // itunes: {
  //   appId: '333903271',
  //   appArgument: 'myAppArgument',
  // },
  // appLinks: {
  //   ios: {
  //     app_name: siteConfig.name,
  //     app_store_id: '333903271',
  //     url: 'https://recomend.app/ios',
  //   },
  //   android: {
  //     package: 'com.example.android/package',
  //     app_name: 'app_name_android',
  //   },
  //   web: {
  //     url: 'https://recomend.app/',
  //     should_fallback: true,
  //   },
  // },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: 'default',
    startupImage: [
      '/icons/icon-512x512.png',
      {
        url: '/icons/icon-512x512.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
