
import Body from './Components/Body/Body'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Footer from './Components/footer/Footer'
import Features from './Components/features/Features'



function App() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])


  return (
  
    <>
    <Body/>
    <Features/>
    <Footer/>
    </>
  )
}

export default App
