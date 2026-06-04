import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import { ThemeProvider } from './ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import IconReferences from './components/Footer/IconReferences'
import CursorTrail from './components/UX/CursorTrail'

function App() {
  const childRef = useRef(null)

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App bg-skin-bg min-h-screen transition-colors duration-300">
                <Navbar />
                <Header forwardedRef={childRef} />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
                <CursorTrail color="rgba(255, 196, 102, 0.55)" />
              </div>
            }
          />
          <Route path="/icons" element={<IconReferences />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
