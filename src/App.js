import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Screens/Home';
import Pricings from './Screens/Pricings';
import About from './Screens/About';
import Logiciel from './Screens/Logiciel';
import Blog from './Screens/Blog';
import FAQ from './Screens/FAQ';
import Navb from "./Components/Navb";
import Modal from "./Components/SearchModal";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <Navb />
        <Modal />
      </ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricings />} />
          <Route path="/about" element={<About />} />
          <Route path="/logiciel" element={<Logiciel />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
