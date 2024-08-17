import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
    const [saludo,setSaludo] = useState("")

    const handleInput =(event)=>{
        setSaludo(event.target.value)
    }

    return (
        <> 
            <nav className='navbar'>
                <h3>Practicando Hooks</h3>
                <ul className='navlist'>
                    <li className='navitem'>
                        <Link to="/calculadora">useState - Calculadora</Link>
                    </li>
                    <li className='navitem'>
                        <Link to="/background">useState - Background Aleatorio</Link>
                    </li>
                    <li className='navitem'>
                        <Link to="/formulario">useState - Registro</Link>
                    </li>
                    <li className='navitem1'>
                        <Link to="/lista">useState - Lista Tareas</Link>
                    </li>
                </ul>
            </nav>
            <div className="saludo">
                <h2 className='titulo'>Bienvenid@ {saludo}</h2>
                <input  className='input' type="text"
                value={saludo}
                onChange={handleInput} />
            </div>
        </>
    );
};
