import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/images/hero-chili.png";
import cinnamonImg from "@/assets/images/spice-cinnamon.png";
import starAniseImg from "@/assets/images/spice-staranise.png";
import cardamomImg from "@/assets/images/spice-cardamom.png";
import { CheckCircle, Globe, Ship, ShieldCheck, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  const collectionItems = [
    { title: "Ceylon Cinnamon", desc: "Sweet, delicate, and complex flavour profile, widely considered the 'true' cinnamon.", img: cinnamonImg, detail: "Our Ceylon Cinnamon is harvested from the inner bark of the Cinnamomum verum tree in the coastal regions of Sri Lanka. It contains lower levels of coumarin than Cassia, making it a premium health choice." },
    { title: "Star Anise", desc: "Aromatic, licorice-like warmth that defines many traditional Asian spice blends.", img: starAniseImg, detail: "Star anise is the seed pod from the fruit of the Illicium verum plant. It is picked before it ripens and dried in the sun to lock in its characteristic star shape and powerful essential oils." },
    { title: "Green Cardamom", desc: "Floral, minty, and intensely fragrant pods used in both sweet and savory dishes.", img: cardamomImg, detail: "Known as the 'Queen of Spices', our cardamom pods are hand-picked at peak ripeness to ensure a vibrant green color and maximum aromatic intensity." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img 
            src={heroImg} 
            alt="Premium Chili Peppers" 
            className="w-full h-full object-cover object-right opacity-80"
          />
        </div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              The Essence of Heat
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              Ignite Your <br/>
              <span className="text-primary italic">Senses.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Discover the world's most vibrant chili and exotic spices, hand-selected for the discerning palate and global export.
            </p>
            <div className="flex gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full tracking-wider uppercase px-8">
                  Shop Products
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white/20 text-foreground hover:bg-white/5 rounded-full tracking-wider uppercase px-8">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview (Our Heritage) */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-2 block">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-6">A Legacy of Pure Flavor</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Founded on a passion for authentic culinary experiences, Aura Spices began as a quest to find the world's most vibrant and potent chili peppers. We believe a true spice offers a complex symphony of flavors—smoky, fruity, earthy, and bright.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full tracking-wider uppercase px-10 h-14 text-sm font-bold">
                  Learn more about us &rarr;
                </Button>
              </Link>
            </div>
            <div className="bg-card p-12 border border-white/5 relative overflow-hidden group rounded-3xl shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-primary/20 transition-colors" />
              <h3 className="font-serif text-3xl mb-6">Our Mission</h3>
              <p className="text-muted-foreground text-xl italic leading-relaxed">
                "To bring the hidden gems of the spice world to every kitchen, ensuring purity, potency, and sustainable sourcing in every grain."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Export Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-primary" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-primary/30 mb-4 px-4 py-1 rounded-full">Global Trade</Badge>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Global Export Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Aura Spices is a leading exporter of premium spices, serving bulk distributors, luxury retailers, and culinary institutions across 40+ countries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Ship className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-xl font-serif mb-4">Seamless Logistics</h3>
              <p className="text-muted-foreground">Specialized in air and sea freight with end-to-end tracking and optimized cold-chain solutions for maximum freshness.</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl">
              <ShieldCheck className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-xl font-serif mb-4">Certified Quality</h3>
              <p className="text-muted-foreground">Strict adherence to international food safety standards (ISO, HACCP, Organic) with rigorous multi-stage testing.</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Zap className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-xl font-serif mb-4">Bulk Fulfillment</h3>
              <p className="text-muted-foreground">High-capacity processing and packaging facilities capable of handling multi-ton orders with rapid turnaround times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Why Discerning Chefs <br/><span className="text-secondary italic">Choose Aura</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Peak Potency", desc: "Spices harvested at the precise moment of peak oil concentration." },
                  { title: "Direct Sourcing", desc: "No middle-men. We work directly with farmers to ensure fair trade and quality." },
                  { title: "Small Batch Grinding", desc: "We grind in limited quantities to prevent oxidation and flavor loss." },
                  { title: "Purity Guaranteed", desc: "Zero fillers, dyes, or artificial anti-caking agents. Just 100% spice." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center group hover:bg-primary/10 transition-colors rounded-2xl">
                <span className="text-4xl font-serif text-primary mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Organic Certified</span>
              </div>
              <div className="aspect-square bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center group hover:bg-secondary/10 transition-colors rounded-2xl">
                <span className="text-4xl font-serif text-secondary mb-2">40+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Countries Exported</span>
              </div>
              <div className="aspect-square bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center group hover:bg-secondary/10 transition-colors rounded-2xl">
                <span className="text-4xl font-serif text-secondary mb-2">150+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Premium Varieties</span>
              </div>
              <div className="aspect-square bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center group hover:bg-primary/10 transition-colors rounded-2xl">
                <span className="text-4xl font-serif text-primary mb-2">24h</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Order Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collection with Popups */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-xs mb-2 block">Our Collection</span>
              <h2 className="text-3xl md:text-4xl font-serif">Signature Selection</h2>
            </div>
            <Link href="/products">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full tracking-wider uppercase px-8">
                Go to Shop
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collectionItems.map((item, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-2xl">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{item.desc}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-card border-white/10 text-foreground max-w-2xl rounded-3xl p-0 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-full">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <DialogHeader className="text-left mb-6">
                        <Badge className="bg-primary/20 text-primary border-none w-fit mb-2 rounded-full uppercase text-[10px] tracking-widest">Premium Selection</Badge>
                        <DialogTitle className="text-3xl font-serif text-foreground">{item.title}</DialogTitle>
                        <DialogDescription className="text-muted-foreground mt-4 leading-relaxed italic">
                          {item.desc}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                        <Link href="/products">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full uppercase tracking-wider h-12 mt-4">
                            Shop {item.title}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
