import './App.css';
import { Calculadora } from './component/Calculadora/Calculadora';
import { Navbar } from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Background } from './component/Background/Background';
import { Formulario } from './component/Formulario/Formulario';
import {Tareas} from './component/Tareas/Tareas'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Navbar/>}/>
        <Route path='/calculadora' element={<Calculadora />} />
        <Route path='/background' element={<Background />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/lista' element={<Tareas />} />
      </Routes>
    </>
  );
};

export default App;
