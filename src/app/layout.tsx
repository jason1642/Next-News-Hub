import './globals.css'
import Header from '../components/SiteHeader'
export const metadata = {
  title: 'Next News Hub',
  description: 'Welcome to Next News Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
