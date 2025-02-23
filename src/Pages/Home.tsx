import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Horoscope from './Horoscope';
import "./Style/Home.css"
export default function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Horoscope/>
        <Footer/>
    </>
  )
}
