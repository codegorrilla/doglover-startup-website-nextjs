import Image from 'next/image';
import Form from 'next/form';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24 px-6 bg-background border-t border-primary/10">
      <div className="max-w-2xl mx-auto relative z-10 pb-48">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in <span className="text-primary">Touch</span></h2>
          <p className="text-lg text-foreground/70">
            Have questions about our training programs? Send us an enquiry!
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20 backdrop-blur-sm bg-background/80 relative">
          <Form action="/submit" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground/80 ml-1">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground/80 ml-1">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                placeholder="john@example.com"
                className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-foreground/80 ml-1">Phone</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                required 
                placeholder="(555) 123-4567"
                className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
            >
              Submit Enquiry <Send className="w-5 h-5" />
            </button>
          </Form>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-[28rem] md:h-[28rem] z-0 opacity-95 drop-shadow-xl select-none pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        <Image 
          src="/images/vector_dog.png" 
          alt="Vector Dog holding a bone" 
          fill 
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}
