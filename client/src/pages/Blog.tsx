export default function Blog() {
  const posts = [
    {
      title: "The Anatomy of Heat: Understanding Chili Peppers",
      date: "Oct 12, 2023",
      excerpt: "Not all heat is created equal. Discover the difference between the quick, bright burn of a Thai chili and the slow, building warmth of an aged habanero.",
      category: "Education"
    },
    {
      title: "Ceylon vs. Cassia: The Cinnamon Debate",
      date: "Sep 28, 2023",
      excerpt: "Learn how to identify true Ceylon cinnamon and why its delicate, complex flavor profile makes it the preferred choice for master bakers.",
      category: "Guides"
    },
    {
      title: "Mastering the Spice Blend: Garam Masala",
      date: "Sep 15, 2023",
      excerpt: "A deep dive into the foundational Indian spice blend. We explore how to toast and grind your own cardamom, cloves, and cumin for maximum aroma.",
      category: "Recipes"
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Journal</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Spice Notes</h1>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {posts.map((post, i) => (
            <article key={i} className="group border-b border-white/10 pb-16 last:border-0">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                <div className="md:w-1/4 pt-2">
                  <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-2 block">{post.category}</span>
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-3xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {post.excerpt}
                  </p>
                  <button className="text-foreground tracking-wider uppercase text-sm border-b border-primary pb-1 hover:text-primary transition-colors">
                    Read Article
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
