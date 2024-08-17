import "./Calculadora.css";
import { useState } from "react";

export const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleInput1 = (event) => {
        setNum1(event.target.value);
    }

    const handleInput2 = (event) => {
        setNum2(event.target.value);
    }

    const calcular = (operation) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResultado("Error: Ingrese números válidos");
            return;
        }

        switch (operation) {
            case 'sumar':
                setResultado(n1 + n2);
                break;
            case 'restar':
                setResultado(n1 - n2);
                break;
            case 'multiplicar':
                setResultado(n1 * n2);
                break;
            case 'dividir':
                if (n2 === 0) {
                    setResultado("Error: División por cero");
                } else {
                    setResultado(n1 / n2);
                }
                break;
            default:
                setResultado("Error: Operación no válida");
        }
    }

    return (
        <div className="containerP">
            <input
                className="input"
                type="number"
                placeholder="Inserte el primer número"
                value={num1}
                onChange={handleInput1}
            />
            <input
                className="input"
                type="number"
                placeholder="Inserte el segundo número"
                value={num2}
                onChange={handleInput2}
            />
            <div className="button">
                <button className="btn" onClick={() => calcular('sumar')}>Sumar</button>
                <button className="btn" onClick={() => calcular('restar')}>Restar</button>
                <button className="btn" onClick={() => calcular('multiplicar')}>Multiplicar</button>
                <button className="btn" onClick={() => calcular('dividir')}>Dividir</button>
            </div>
            <div className="result">
                Resultado: {resultado !== null ? resultado : ''}
            </div>
            <a className="inicio" href="/">Inicio</a>
        </div>
    );
}