import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const datosVentas = Array.from({ length: 50 }, (_, i) => ({
    name: `Día ${i + 1}`,
    ventas: Math.floor(Math.random() * 1000) + 1000,
}));

const datosBeneficios = Array.from({ length: 50 }, (_, i) => ({
    name: `Semana ${i + 1}`,
    beneficios: Math.floor(Math.random() * 5000) + 5000,
}));

const datosPaises = [
    { name: 'USA', compras: 400 },
    { name: 'Canadá', compras: 300 },
    { name: 'México', compras: 500 },
    { name: 'Brasil', compras: 450 },
    { name: 'Alemania', compras: 600 },
    { name: 'Francia', compras: 550 },
    { name: 'España', compras: 700 },
    { name: 'Italia', compras: 650 },
    { name: 'Reino Unido', compras: 720 },
    { name: 'Japón', compras: 800 },
    { name: 'China', compras: 750 },
    { name: 'Australia', compras: 900 },
    { name: 'India', compras: 850 },
    { name: 'Rusia', compras: 780 },
    { name: 'Sudáfrica', compras: 670 },
];

const datosClientes = Array.from({ length: 50 }, (_, i) => ({
    name: `Mes ${i + 1}`,
    clientes: Math.floor(Math.random() * 100) + 200,
}));

const colores = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
    return (
        <div className="container">
            <h2 className="dashboard-title text-center mb-4">Panel de Control Tienda360</h2>
            <nav className="dashboard-nav d-flex justify-content-center mb-4">
                <Link to="/profile" className="nav-link">Perfil de Usuario</Link>
                <Link to="/recommendations" className="nav-link">Recomendaciones de Productos</Link>
            </nav>
            <div className="row">
                <div className="col-md-6">
                    <h5>Datos de Ventas</h5>
                    <BarChart width={500} height={300} data={datosVentas} className="mb-4">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ventas" fill="#8884d8" />
                    </BarChart>
                </div>
                <div className="col-md-6">
                    <h5>Datos de Beneficios</h5>
                    <LineChart width={500} height={300} data={datosBeneficios}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="beneficios" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className="col-md-6">
                    <h5>Top Países con más Compras</h5>
                    <PieChart width={500} height={300}>
                        <Pie
                            data={datosPaises}
                            cx={250}
                            cy={150}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="compras"
                            label
                        >
                            {datosPaises.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
                <div className="col-md-6">
                    <h5>Evolución del Número de Clientes</h5>
                    <LineChart width={500} height={300} data={datosClientes}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="clientes" stroke="#ffc658" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
