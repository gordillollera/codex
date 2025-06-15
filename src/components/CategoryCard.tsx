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
    <div className={`rounded-lg shadow-md overflow-hidden ${colorClasses}`}>
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
