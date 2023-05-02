import { Routes, Route } from "react-router-dom"
import Presentation from "./Presentation"
// import About from "./About"
import Why from "./Home"
import Cv from "./cv/Cv"
import CoverLetter from "./CoverLetter/CoverLetter"
import Links from "./links/Links"

const Body = () => {
  return (
      <Routes>
        <Route path="/" element={ <Presentation/> } />
        <Route path="/home" element={ <Presentation/> } />
        <Route path="/Why" element={ <Why/> } />
        <Route path="/cv" element={ <Cv/> } />
        <Route path="/cover_letter" element={ <CoverLetter/> } />
        <Route path="/links" element={ <Links/> } />
      </Routes>
  )
}

export default Body