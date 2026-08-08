import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { MobileBottomBar } from '@/components/layout/MobileBottomBar'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ServicesPage } from '@/pages/Services'
import { GalleryPage } from '@/pages/Gallery'
import { ContactPage } from '@/pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0F1318' }}>
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
      <ScrollToTop />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
