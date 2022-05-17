import Head from 'next/head'

import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Hero from '../components/hero'
import About from '../components/About'
import Services from '../components/Services'
import Applyus from '../components/Applyus'
import Team from '../components/Team'

import Contact from '../components/Contact'
import Location from '../components/Location'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Footerbottom from '../components/Footerbottom'
import Projects from '../components/Projects'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
     
        
      </Head>

      <Navbar />
      <Hero />
      <About />


      <Services />
      <Applyus />
      <Projects />


      <Team />

      <Newsletter />
      <Contact />
      <Location />
      <Footer />
      <Footerbottom />
     






    </div>
  )
}
