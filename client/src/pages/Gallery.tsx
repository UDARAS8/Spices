import heroImg from "@/assets/images/hero-chili.png";
import cinnamonImg from "@/assets/images/spice-cinnamon.png";
import starAniseImg from "@/assets/images/spice-staranise.png";
import peppercornsImg from "@/assets/images/spice-peppercorns.png";
import cardamomImg from "@/assets/images/spice-cardamom.png";
import clovesImg from "@/assets/images/spice-cloves.png";

const galleryImages = [
  { name: "Premium Chili", category: "Signature", img: heroImg },
  { name: "Ceylon Cinnamon", category: "Sweet Spice", img: cinnamonImg },
  { name: "Star Anise", category: "Aromatic", img: starAniseImg },
  { name: "Black & White Peppercorns", category: "Savory", img: peppercornsImg },
  { name: "Green & Black Cardamom", category: "Aromatic", img: cardamomImg },
  { name: "Whole Cloves", category: "Sweet Spice", img: clovesImg },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Visual Collection</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Spice Gallery</h1>
          <div className="h-1 w-20 bg-secondary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            A visual journey through the textures and colors of our premium spice collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-card border border-white/5 aspect-square">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.category}</span>
                <h3 className="text-white font-serif text-2xl">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
