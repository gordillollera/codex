'use client';

import { useState } from 'react';
import profesionales from '../../data/profesionales.json';

interface Profesional {
  id: number;
  nombre: string;
  provincia: string;
  especialidad: string;
  tipo: string;
}

export default function Buscar() {
  const [provincia, setProvincia] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [tipo, setTipo] = useState('');

  const resultados = profesionales.filter((p: Profesional) => {
    return (
      (!provincia || p.provincia === provincia) &&
      (!especialidad || p.especialidad === especialidad) &&
      (!tipo || p.tipo === tipo)
    );
  });

  const provincias = Array.from(new Set(profesionales.map(p => p.provincia)));
  const especialidades = Array.from(new Set(profesionales.map(p => p.especialidad)));
  const tipos = Array.from(new Set(profesionales.map(p => p.tipo)));

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Buscar Profesionales</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <select value={provincia} onChange={e => setProvincia(e.target.value)} className="border p-2">
          <option value="">Provincia</option>
          {provincias.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select value={especialidad} onChange={e => setEspecialidad(e.target.value)} className="border p-2">
          <option value="">Especialidad</option>
          {especialidades.map(e => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
        <select value={tipo} onChange={e => setTipo(e.target.value)} className="border p-2">
          <option value="">Tipo de consulta</option>
          {tipos.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <ul className="space-y-2">
        {resultados.map(p => (
          <li key={p.id} className="border p-2 rounded">
            <strong>{p.nombre}</strong> - {p.especialidad} ({p.tipo}) - {p.provincia}
          </li>
        ))}
        {resultados.length === 0 && <li>No se encontraron profesionales.</li>}
      </ul>
    </div>
  );
}
