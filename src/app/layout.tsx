
import './globals.css'
import Header from '../components/Header/SiteHeader'
// import ReactRain from 'react-rain-animation'
// import "react-rain-animation/lib/style.css";
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
      <body className='bg-[#f5f5f5]'>
      {/* <ReactRain numDrops='50'/> */}

        <Header />
        {children}
        </body>
    </html>
  )
}
