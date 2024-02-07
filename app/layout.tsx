import Footer from '@/component/Footer';
import Header from '@/component/Header';
import '@/styles/globals.css';

export const metadata = {
  title: 'car explore',
  description: 'discover car explore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>learn next</title>
      <body className='relative'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
