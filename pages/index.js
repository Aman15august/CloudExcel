import Head from 'next/head'

import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Script from "next/script"
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
     
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
        <Script src="https://kit.fontawesome.com/52a8ab4aa4.js" crossorigin="anonymous"></Script>
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
