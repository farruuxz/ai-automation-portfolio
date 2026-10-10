import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Flow from './components/Flow'
import Screenshots from './components/Screenshots'
import BusinessValue from './components/BusinessValue'
import TechStack from './components/TechStack'
import Result from './components/Result'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Flow />
        <Screenshots />
        <BusinessValue />
        <TechStack />
        <Result />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
