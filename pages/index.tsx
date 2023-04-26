import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between   py-5 w-full h-screen xls:px-3 lg:px-24 ">
      <Navbar />
      <Footer />
    </main> 
  )
}
