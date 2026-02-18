export type Product = {
  id: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  price: number;
  overallScore: number;
  specs: Record<string, { value: string | number; score: number }>;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export const categories: Category[] = [
  { id: "smartphones", name: "Smartphones", icon: "📱", count: 1240 },
  { id: "laptops", name: "Laptops", icon: "💻", count: 890 },
  { id: "headphones", name: "Headphones", icon: "🎧", count: 560 },
  { id: "cameras", name: "Cameras", icon: "📷", count: 420 },
  { id: "tablets", name: "Tablets", icon: "📲", count: 310 },
  { id: "smartwatches", name: "Smartwatches", icon: "⌚", count: 280 },
];

export const products: Product[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    image: "",
    category: "smartphones",
    price: 999,
    overallScore: 92,
    specs: {
      Display: { value: "6.3\" OLED 120Hz", score: 95 },
      Processor: { value: "A18 Pro", score: 98 },
      Camera: { value: "48MP Triple", score: 94 },
      Battery: { value: "4685 mAh", score: 85 },
      Storage: { value: "256GB", score: 80 },
      Weight: { value: "199g", score: 75 },
    },
  },
  {
    id: "galaxy-s25-ultra",
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    image: "",
    category: "smartphones",
    price: 1299,
    overallScore: 90,
    specs: {
      Display: { value: "6.9\" AMOLED 120Hz", score: 97 },
      Processor: { value: "Snapdragon 8 Elite", score: 96 },
      Camera: { value: "200MP Quad", score: 93 },
      Battery: { value: "5000 mAh", score: 92 },
      Storage: { value: "256GB", score: 80 },
      Weight: { value: "218g", score: 65 },
    },
  },
  {
    id: "pixel-9-pro",
    name: "Pixel 9 Pro",
    brand: "Google",
    image: "",
    category: "smartphones",
    price: 899,
    overallScore: 88,
    specs: {
      Display: { value: "6.3\" OLED 120Hz", score: 90 },
      Processor: { value: "Tensor G4", score: 85 },
      Camera: { value: "50MP Triple", score: 96 },
      Battery: { value: "4700 mAh", score: 88 },
      Storage: { value: "128GB", score: 70 },
      Weight: { value: "199g", score: 75 },
    },
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    image: "",
    category: "smartphones",
    price: 799,
    overallScore: 86,
    specs: {
      Display: { value: "6.82\" AMOLED 120Hz", score: 93 },
      Processor: { value: "Snapdragon 8 Elite", score: 96 },
      Camera: { value: "50MP Triple", score: 85 },
      Battery: { value: "6000 mAh", score: 98 },
      Storage: { value: "256GB", score: 80 },
      Weight: { value: "213g", score: 68 },
    },
  },
];

export function getScoreColor(score: number): string {
  if (score >= 90) return "bg-score-excellent";
  if (score >= 75) return "bg-score-good";
  if (score >= 50) return "bg-score-average";
  return "bg-score-poor";
}

export function getScoreLabel(score: number): string {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 50) return "Average";
  return "Poor";
}
