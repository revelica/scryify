import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Pricing } from './pages/Pricing'
import { About } from './pages/About'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation theme={theme} toggle={toggle} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
