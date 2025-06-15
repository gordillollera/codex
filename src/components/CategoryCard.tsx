import Image from 'next/image';

export type Category = 'smartphones' | 'wearables' | 'laptops' | 'xiaomi';

export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  category: Category;
}

const categoryColorMap: Record<Category, string> = {
  smartphones: 'bg-blue-100 text-blue-800',
  wearables: 'bg-purple-100 text-purple-800',
  laptops: 'bg-green-100 text-green-800',
  xiaomi: 'bg-orange-100 text-orange-800',
};

export default function CategoryCard({
  title,
  description,
  image,
  category,
}: CategoryCardProps) {
  const colorClasses = categoryColorMap[category];

  return (
    <div className={`rounded-lg shadow p-4 flex flex-col items-center space-y-2 ${colorClasses}`}>
      <div className="w-full h-40 relative">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}
