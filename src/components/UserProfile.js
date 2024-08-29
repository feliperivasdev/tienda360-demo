import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div className="container user-profile shadow p-4 bg-white rounded">
            <h2 className="mb-4">Perfil de Usuario</h2>
            <p><strong>Nombre de usuario:</strong> UsuarioDemo</p>
            <p><strong>Correo electrónico:</strong> demo@ejemplo.com</p>
            <p><strong>Última compra:</strong> Producto XYZ</p>
            <Link to="/dashboard" className="btn btn-custom">Volver al Panel de Control</Link>
        </div>
    );
};

export default UserProfile;