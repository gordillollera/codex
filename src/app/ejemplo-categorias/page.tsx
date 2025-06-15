import CategoryCard from '@/components/CategoryCard';

export default function EjemploCategorias() {
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <CategoryCard
        title="Últimos Smartphones"
        description="Descubre los móviles más recientes y sus características."
        image="https://placehold.co/400x240?text=Smartphone"
        category="smartphones"
      />
      <CategoryCard
        title="Nuevos Wearables"
        description="Relojes inteligentes y accesorios para tu día a día."
        image="https://placehold.co/400x240?text=Wearable"
        category="wearables"
      />
      <CategoryCard
        title="Portátiles Recomendados"
        description="Los mejores laptops para productividad y gaming."
        image="https://placehold.co/400x240?text=Laptop"
        category="laptops"
      />
      <CategoryCard
        title="Ecosistema Xiaomi"
        description="Lo último de la marca en todos sus dispositivos."
        image="https://placehold.co/400x240?text=Xiaomi"
        category="xiaomi"
      />
    </div>
  );
}
