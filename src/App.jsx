import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Services from "./pages/Services"
import Dashboard from "./pages/Dashboard"
import AddTv from "./pages/AddTv"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/addTv" element={<AddTv />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App