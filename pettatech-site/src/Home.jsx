import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import fotoPerfil from "./assets/fotoperfil.jpeg"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

export default function Home(){

    return(

        <>

            <Navbar/>

            <Hero/>

            <Services/> 

            <About/>
            <Contact/>

        </>

    )

}