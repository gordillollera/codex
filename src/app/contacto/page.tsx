'use client';

import { useState } from 'react';

export default function Contacto() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'enviado' | 'error'>('idle');

  const enviar = async () => {
    setEstado('enviando');
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, mensaje }),
      });
      if (res.ok) setEstado('enviado');
      else setEstado('error');
    } catch {
      setEstado('error');
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Contacto</h1>
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Tu mensaje"
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={enviar} className="px-4 py-2 bg-blue-600 text-white rounded">
        Enviar
      </button>
      {estado === 'enviando' && <p>Enviando...</p>}
      {estado === 'enviado' && <p>Mensaje enviado.</p>}
      {estado === 'error' && <p>Error al enviar.</p>}
    </div>
  );
}
