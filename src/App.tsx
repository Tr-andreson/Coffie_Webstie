import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/menu' element={<Menu />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </ >
  );
}

export default App;
