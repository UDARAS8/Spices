import heroImg from "@/assets/images/hero-chili.png";

export default function About() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">The Journey of Flavor</h1>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded on a passion for authentic culinary experiences, Aura Spices began as a quest to find the world's most vibrant and potent chili peppers.
            </p>
            <p>
              We traverse the globe, from the sun-drenched fields of Mexico to the high-altitude farms of India, seeking out growers who respect the land and cultivate spices with generations of expertise.
            </p>
            <p>
              Our commitment goes beyond heat. We believe a true chili offers a complex symphony of flavors—smoky, fruity, earthy, and bright. This philosophy extends to our entire collection, from the delicate sweetness of Ceylon Cinnamon to the robust warmth of Tellicherry Black Peppercorns.
            </p>
            <div className="pt-8 border-t border-white/10">
              <h3 className="font-serif text-2xl text-foreground mb-4">Our Promise</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-secondary font-serif text-xl">01.</span>
                  <span><strong>Sourced directly</strong> from passionate farmers around the globe.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-secondary font-serif text-xl">02.</span>
                  <span><strong>Hand-selected</strong> for peak oil content, vibrant color, and intense aroma.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-secondary font-serif text-xl">03.</span>
                  <span><strong>Packaged immediately</strong> to seal in the volatile oils that deliver unparalleled flavor.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative h-[600px] lg:h-[800px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent z-10" />
            <img 
              src={heroImg} 
              alt="Spices origin" 
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
