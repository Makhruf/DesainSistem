import React from "react";
import LandingComponent from './components/Landing';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import AtasanComponent from "./components/Atasan";
import Content from "./components/Content";
import CardComponent from "./components/Card";
import FooterComponent from "./components/Footer";
import LandingPages from "./components/LandingPage"
import FontComponents  from "./components/Font";
import Buttonutama from "./components/Button";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages/>}/>
        <Route path="/atasan" element={<AtasanComponent/>}/>
        <Route path="/konten" element={<Content/>}/>
        <Route path="/card" element={<CardComponent/>}/>
        <Route path="/footer" element={<FooterComponent/>}/>
        <Route path="/font" element={<FontComponents/>}/>
        <Route path="/button" element={<Buttonutama/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;