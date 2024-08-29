import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

// Datos de ejemplo
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

// Colores para las barras
const colors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
    '#FF9F40', '#FFCD56', '#4B77BE', '#F39C12', '#E74C3C',
    '#1F77B4', '#D62728', '#9467BD', '#8C564B'
];

const Dashboard = () => {
    return (
        <div className="container">
            <h2 className="dashboard-title text-center mb-4">Panel de Control Tienda360</h2>
            <nav className="dashboard-nav d-flex justify-content-center mb-4">
                <Link to="/profile" className="btn btn-custom me-3">Perfil de Usuario</Link>
                <Link to="/recommendations" className="btn btn-custom">Recomendaciones de Productos</Link>
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
                <div className="col-md-12">
                    <h5>Top Países con más Compras</h5>
                    <BarChart width={800} height={400} data={datosPaises} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tick={{ angle: 0, textAnchor: 'end' }}
                            width={150} // Ajusta el ancho para el eje Y
                        />
                        <Tooltip />
                        <Legend />
                        {datosPaises.map((pais, index) => (
                            <Bar
                                key={pais.name}
                                dataKey="compras"
                                fill={colors[index % colors.length]}
                                barSize={20} // Ajusta el tamaño de las barras
                                name={pais.name}
                            />
                        ))}
                    </BarChart>
                </div>
                <div className="col-md-12">
                    <h5>Evolución del Número de Clientes</h5>
                    <LineChart width={800} height={400} data={datosClientes}>
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
