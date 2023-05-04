import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MainPrincipal } from '../components/MainPrincipal'
import { Experience } from '@/components/Experience'
import { Proyects } from '@/components/Proyects'

export default function Home() {
  return (
    <main className="flex flex-col px-5 py-10 sm:px-10 lg:px-20 xl:px-40">
      <Navbar />
      <MainPrincipal />
      <Experience />
      <Proyects />
      <Footer />
    </main> 
  )
}
