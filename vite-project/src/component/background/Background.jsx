import "./Background.css";
import { useState } from "react";

export const Background = () => {
    const [background, setBackground] = useState("blue");

    const fondo = () => {
        switch (background) {
            case "blue":
                setBackground("red");
                break;
            case "red":
                setBackground("pink");
                break;
            case "pink":
                setBackground("yellow");
                break;
            case "yellow":
                setBackground("green");
                break;
            case "green":
                setBackground("purple");
                break;
            case "purple":
                setBackground("lightblue");
                break;
            case "lightblue":
                setBackground("orange");
                break;
            case "orange":
                setBackground("violet");
                break;
            default:
                setBackground("blue");
        }
    };

    return (
        <div className="Container_F" style={{ backgroundColor: background }}>
            <button className="btn2" onClick={fondo}>Cambiar Color</button>
            <a className="inicio2" href="/">Inicio</a>
        </div>
    );
};
