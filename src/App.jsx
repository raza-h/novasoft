import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import LandingLayout from './layout/LandingLayout'
import About from './pages/About'
import Clients from './pages/Clients'
import FAQs from './pages/FAQs'
import Home from './pages/Home'
import Quality from './pages/Quality'
import Services from './pages/Services'
import Stats from './pages/Stats'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <>
      <LandingLayout>
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Clients />
        <Team />
        <Stats />
        <Quality />
        <FAQs />
        <Testimonials />
        <Footer />
      </LandingLayout>
    </>
  )
}

export default App
