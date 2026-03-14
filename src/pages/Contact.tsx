import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Contact Us</h1>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-card p-10 border border-white/5">
            <h3 className="font-serif text-3xl mb-8">Reach Out</h3>
            
            <div className="space-y-8 text-muted-foreground">
              <div>
                <strong className="block text-foreground uppercase tracking-wider text-sm mb-2">Visit Us</strong>
                <p>123 Spice Route<br/>Culinary District, Flavor City 90210</p>
              </div>
              
              <div>
                <strong className="block text-foreground uppercase tracking-wider text-sm mb-2">Email</strong>
                <p className="text-primary hover:underline cursor-pointer">inquiries@auraspices.com</p>
                <p className="text-primary hover:underline cursor-pointer">wholesale@auraspices.com</p>
              </div>

              <div>
                <strong className="block text-foreground uppercase tracking-wider text-sm mb-2">Call</strong>
                <p>+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <p className="text-muted-foreground mb-8">
              Whether you're looking for a specific blend, inquiring about wholesale, or simply sharing your latest culinary creation, we'd love to hear from you.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="bg-background border-white/10 rounded-none focus-visible:ring-primary focus-visible:border-primary h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-background border-white/10 rounded-none focus-visible:ring-primary focus-visible:border-primary h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background border-white/10 rounded-none focus-visible:ring-primary focus-visible:border-primary h-12" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="bg-background border-white/10 rounded-none focus-visible:ring-primary focus-visible:border-primary min-h-[150px] resize-none" 
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none tracking-wider uppercase h-14">
                Send Message
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
