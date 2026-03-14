import heroImg from "@/assets/images/hero-chili.png";
import cinnamonImg from "@/assets/images/spice-cinnamon.png";
import starAniseImg from "@/assets/images/spice-staranise.png";
import peppercornsImg from "@/assets/images/spice-peppercorns.png";
import cardamomImg from "@/assets/images/spice-cardamom.png";
import clovesImg from "@/assets/images/spice-cloves.png";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const products = [
  { name: "Premium Chili Flakes", category: "Chili", img: heroImg, price: "$12.00", size: "250g / 1kg" },
  { name: "Ceylon Cinnamon Sticks", category: "Sticks", img: cinnamonImg, price: "$15.00", size: "100g / 500g" },
  { name: "Whole Star Anise", category: "Aromatic", img: starAniseImg, price: "$18.00", size: "50g / 250g" },
  { name: "Tellicherry Peppercorns", category: "Savory", img: peppercornsImg, price: "$14.00", size: "200g / 1kg" },
  { name: "Green Cardamom Pods", category: "Aromatic", img: cardamomImg, price: "$22.00", size: "50g / 250g" },
  { name: "Premium Whole Cloves", category: "Spice", img: clovesImg, price: "$16.00", size: "100g / 500g" },
];

export default function Products() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Store</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our Products</h1>
          <div className="h-1 w-20 bg-secondary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            Explore our curated selection of high-quality spices, available for retail and bulk purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <div key={i} className="group bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-background/80 backdrop-blur-md text-foreground text-xs font-bold px-3 py-1 uppercase tracking-tighter rounded-full">
                    {product.size}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-secondary text-xs font-medium tracking-widest uppercase mb-2 block">{product.category}</span>
                <h3 className="text-white font-serif text-2xl mb-2">{product.name}</h3>
                <p className="text-primary font-bold text-xl mb-6">{product.price}</p>
                
                <div className="mt-auto flex gap-2">
                  <Button className="flex-grow bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl uppercase tracking-wider text-xs h-12">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl uppercase tracking-wider text-xs h-12">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
