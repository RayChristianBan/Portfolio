import Projects from "../components/Project";
import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Hero />
      <About />
      
      <Projects />
      <Footer />
    </main>
  )
}
