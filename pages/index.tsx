import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MainPrincipal } from '../components/MainPrincipal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between py-5 w-full h-screen xls:px-3 lg:px-20 ">
      <Navbar />
      <MainPrincipal />
      <Footer />
    </main> 
  )
}
