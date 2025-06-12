import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 text-center space-y-6">
      <h1 className="text-4xl font-bold">Encuentra Profesionales de Salud Mental</h1>
      <p className="text-lg">Filtra por provincia, especialidad y tipo de consulta.</p>
      <Link href="/buscar" className="px-4 py-2 bg-blue-600 text-white rounded shadow">
        Buscar Profesionales
      </Link>
    </main>
  );
}
