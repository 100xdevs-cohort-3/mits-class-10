import { Routes, Route, BrowserRouter } from "react-router";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App
