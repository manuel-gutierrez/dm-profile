import { Routes, Route } from "react-router-dom"
import Home from "./Home"

const Body = () => {
  return (
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
  )
}

export default Body