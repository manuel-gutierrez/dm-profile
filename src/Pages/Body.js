import { Routes, Route } from "react-router-dom"
import Presentation from "./Presentation"
// import About from "./About"
import Why from "./Home"
import Cv from "./cv/Cv"
import CoverLetter from "./CoverLetter/CoverLetter"
import About from "./About/About"

const Body = () => {
  return (
      <Routes>
        <Route path="/" element={ <Presentation/> } />
        <Route path="/home" element={ <Presentation/> } />
        <Route path="/Why" element={ <Why/> } />
        <Route path="/cv" element={ <Cv/> } />
        <Route path="/cover-letter" element={ <CoverLetter/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
  )
}

export default Body