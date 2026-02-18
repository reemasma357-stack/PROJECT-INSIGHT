import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonView from "@/components/ComparisonView";
import CategoryGrid from "@/components/CategoryGrid";
import { fetchComparison, ComparisonProduct } from "@/lib/api";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ topic: string; products: ComparisonProduct[] } | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const data = await fetchComparison(query);
      setResults({ topic: data.topic || query, products: data.products });
    } catch (err: any) {
      toast({
        title: "Comparison failed",
        description: err.message || "Something went wrong. Try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && (
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-3 glass-panel rounded-2xl px-6 py-4">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-muted-foreground font-body">Generating AI-powered comparison...</span>
            </div>
          </div>
        )}

        {results && !isLoading && (
          <ComparisonView products={results.products} topic={results.topic} />
        )}

        {!results && !isLoading && <CategoryGrid />}

        <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground font-body">
          © 2026 Comparo — Intelligent Comparison Engine
        </footer>
      </main>
    </div>
  );
};

export default Index;
