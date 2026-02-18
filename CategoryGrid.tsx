import { categories } from "@/lib/data";

const CategoryGrid = () => (
  <section className="px-6 py-16 max-w-5xl mx-auto">
    <h2 className="font-display text-2xl font-semibold mb-8 text-center">
      Browse Categories
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((cat, i) => (
        <button
          key={cat.id}
          className="glass-panel rounded-xl p-5 text-left hover:border-primary/30 hover:glow transition-all duration-300 group animate-fade-in-up"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <span className="text-3xl mb-3 block">{cat.icon}</span>
          <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {cat.name}
          </p>
          <p className="text-sm text-muted-foreground">{cat.count} products</p>
        </button>
      ))}
    </div>
  </section>
);

export default CategoryGrid;
