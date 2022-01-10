import './App.css';
import Home from './componentes/Home';
import Waiter from './componentes/Waiter';
import Kitchen from './componentes/Kitchen';
import { Link, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </>

  );
}

export default App;
