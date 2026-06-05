import Navbar      from '@/components/layout/Navbar'
import Footer      from '@/components/layout/Footer'
import WhatsAppBtn from '@/components/ui/WhatsAppBtn'
import Hero        from '@/components/sections/Hero'
import Ticker      from '@/components/sections/Ticker'
import About       from '@/components/sections/About'
import Contact     from '@/components/sections/Contact'
import {
  Stats, Services, Products, Projects,
  CtaBanner, Clients, Testimonials, Faq,
} from '@/components/sections/Sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Stats />
        <Services />
        <Products />
        <Projects />
        <CtaBanner />
        <Clients />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}
