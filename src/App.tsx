import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { SmoothScrollProvider } from '@/components/providers'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </SmoothScrollProvider>
  )
}

export default App
