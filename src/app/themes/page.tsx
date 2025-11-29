import { ProductCard } from "@/components/product-card";

export default function ThemesPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <ProductCard key={idx} idx={idx} />
      ))}
    </div>
  );
}
