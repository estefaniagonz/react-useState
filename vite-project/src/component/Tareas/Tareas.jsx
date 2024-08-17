import React, { useState } from 'react';
import './Tareas.css'; 

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion) return alert('Completa todos los campos.');

    setTareas([...tareas, { nombre, descripcion }]);
    setNombre('');
    setDescripcion('');
  };

  return (
    <div className="form-container">
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input-field"
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">Guardar</button>
      </form>

      <h3>Tareas Guardadas</h3>
      <ul className="task-list">
        {tareas.map((tarea, index) => (
          <li key={index} className="task-item">
            <strong>{tarea.nombre}</strong>: {tarea.descripcion}
          </li>
        ))}
      </ul>
      <a className="inicio4"href="/">Inicio</a>
    </div>
  );
};
