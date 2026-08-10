import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import fotoPerfil from "./assets/fotoperfil.jpeg"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

export default function Home(){

    return(

        <>

            <Navbar/>

            <Hero/>

            <Services/> 

            <About/>
            
            <Footer/>
        </>

    )

}