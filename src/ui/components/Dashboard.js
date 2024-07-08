import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Hola, bienvenido de nuevo!</h1>
      <div className="notifications">
        <h2>Últimas Notificaciones</h2>
        <ul>
          <li>[Recordatorio] Ingrese los nuevos datos del empleado en el sistema</li>
          <li>Pagos de salario recibidos por todos los empleados</li>
          <li>El departamento de marketing necesita nuevos empleados</li>
          <li>[Recordatorio] Reporte de datos de nómina para julio de 2022</li>
        </ul>
      </div>
      <div className="schedule">
        <h2>Horario</h2>
        <p>10:00 AM - Reunión</p>
        <p>01:00 PM - Entrevista</p>
        <p>09:00 AM (9 de agosto) - Grupo de Discusión</p>
      </div>
    </div>
  );
};

export default Dashboard;
