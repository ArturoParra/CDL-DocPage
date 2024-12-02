import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Iteracion0 } from './Pages/Iteracion0';
import { Iteracion1 } from './Pages/Iteracion1';
import { Iteracion2 } from './Pages/Iteracion2';
import { Iteracion3 } from './Pages/Iteracion3';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/iteracion0" element={<Iteracion0/>} />
      <Route path="/iteracion1" element={<Iteracion1/>} />
      <Route path="/iteracion2" element={<Iteracion2/>} />
      <Route path="/iteracion3" element={<Iteracion3/>} />
    </Routes>
  );
}

export default App;
