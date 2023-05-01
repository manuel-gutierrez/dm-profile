import { Routes, Route } from "react-router-dom"
import Presentation from "./Presentation"
// import About from "./About"
import Home from "./Home"
import Cv from "./cv/Cv"
import CoverLetter from "./CoverLetter/CoverLetter"
import Links from "./links/Links"

const Body = () => {
  return (
      <Routes>
        <Route path="/" element={ <Presentation/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="cv" element={ <Cv/> } />
        <Route path="/home/cover_letter" element={ <CoverLetter/> } />
        <Route path="links" element={ <Links/> } />
      </Routes>
  )
}

export default Body