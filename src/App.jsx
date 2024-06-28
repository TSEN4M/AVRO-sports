
import Home from "./pages/Home"
import Sports from "./pages/Sports"
import Community from "./pages/Community"
import Events from "./pages/Events"
import Booking from "./pages/Booking"

import {Routes,Route} from "react-router-dom"


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="booking" element={<Booking/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
