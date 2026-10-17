import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Divider from './components/Divider'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
        <Divider />
      </main>
      <footer className="text-center text-[0.8rem] text-[#72777c] mb-6">
        <a
          href="https://github.com/Ravi200603/Portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#3e5aa7]"
        >
          Source on GitHub
        </a>
      </footer>
    </>
  )
}
