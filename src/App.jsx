import { useState } from 'react'
import gsap from 'gsap' 
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
   <main>
    <Navbar />
   </main>
  )
}

export default App
