
import './globals.css'
import Header from '../components/Header/SiteHeader'
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
<head>
{/* <link href="/dist/output.css" rel="stylesheet"/> */}
</head>
      <body className='bg-white'>
        <Header />
        {children}
        </body>
    </html>
  )
}
