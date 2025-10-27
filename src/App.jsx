import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact";
import { Home } from './Components/Home';
import { Menu } from "./Components/Menu/Menu";
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ >
  );
}

export default App;
