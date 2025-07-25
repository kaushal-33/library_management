import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Services from "./pages/Services"
import Dashboard from "./pages/Dashboard"
import AddTv from "./pages/AddTv"
import UpdateTv from "./pages/UpdateTv"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/addTv" element={<AddTv />} />
          <Route path="/update_tv/:idx" element={<UpdateTv />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App