import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 text-center md:text-left mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-2xl tracking-widest uppercase mb-4">
              <span className="text-primary font-bold">AURA</span>
              <span className="text-foreground/90 font-light">SPICES</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Curators of the world's finest, most aromatic spices. Elevate your culinary experience with our hand-selected premium collections.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-4 text-foreground/90">Navigation</h4>
            <ul className="space-y-2 flex flex-col">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-4 text-foreground/90">Contact</h4>
            <p className="text-muted-foreground mb-2">123 Spice Route, Culinary District</p>
            <p className="text-muted-foreground mb-2">info@auraspices.com</p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Aura Spices. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
