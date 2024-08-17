import React, { useState } from 'react';
import './Formulario.css'; 

export const Formulario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioExistente = usuarios.some((user) => user.id === id || user.correo === correo);

    if (usuarioExistente) {
      alert('Este usuario ya existe');
      return;
    }

    const nuevoUsuario = { id, nombre, usuario, correo, telefono };
    setUsuarios([...usuarios, nuevoUsuario]);

    setNombre('');
    setUsuario('');
    setCorreo('');
    setTelefono('');
    setId('');

    alert('Usuario registrado con éxito');
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">Registrar</button>
      </form>

      <h3>Usuarios Registrados </h3>
      <ul className="user-list">
        {usuarios.map((user) => (
          <li key={user.id} className="user-item">
            {user.nombre} ({user.usuario}) - {user.correo} - {user.telefono}
          </li>
        ))}
      </ul>
      <a className='inicio3' href="/">Inicio</a>
    </div>
  );
};
