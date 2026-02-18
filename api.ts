import { supabase } from "@/integrations/supabase/client";

export type ComparisonProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  overallScore: number;
  specs: Record<string, { value: string | number; score: number }>;
};

export type ComparisonResult = {
  topic: string;
  products: ComparisonProduct[];
};

export async function fetchComparison(topic: string): Promise<ComparisonResult> {
  const { data, error } = await supabase.functions.invoke("compare", {
    body: { topic: topic.trim() },
  });

  if (error) throw new Error(error.message || "Failed to fetch comparison");
  if (data?.error) throw new Error(data.error);
  return data as ComparisonResult;
}
