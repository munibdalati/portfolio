// calling css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';


function App() {
  const pageStyle = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <BrowserRouter style={pageStyle}>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/About" Component={About}></Route>
        <Route path="/Projects" Component={Projects}></Route>
        <Route path="Skills" Component={Skills}></Route>
        <Route path="/Contact" Component={Contact}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App