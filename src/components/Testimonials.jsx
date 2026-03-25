'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Golden Retriever Owner",
    text: "Pawsitive Training completely transformed my dog's behavior. The physical demonstration classes were a lifesaver!",
    image: "/images/client.png"
  },
  {
    name: "Michael Chen",
    role: "French Bulldog Owner",
    text: "The online video consultations fit perfectly into my busy schedule. The trainers are incredibly knowledgeable.",
    image: "/images/client.png"
  },
  {
    name: "Emily Rodriguez",
    role: "Mixed Breed Owner",
    text: "I couldn't be happier with the results. My rescue dog is finally confident and well-behaved around other dogs.",
    image: "/images/client.png"
  },
  {
    name: "David Smith",
    role: "German Shepherd Owner",
    text: "Professional, effective, and truly caring. The trainers go above and beyond to ensure you succeed.",
    image: "/images/client.png"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".testimonial-card", 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-primary/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Happy <span className="text-secondary">Clients</span></h2>
          <p className="text-lg text-foreground/70">Don't just take our word for it—see what our clients have to say.</p>
        </div>

        <div className="relative bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10 rotate-180" />
          
          <div className="testimonial-card flex flex-col items-center text-center relative z-10 min-h-[300px] justify-center">
            <p className="text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed mb-10 italic max-w-3xl">
              "{testimonials[current].text}"
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Image 
                src={testimonials[current].image} 
                alt={testimonials[current].name} 
                width={80} 
                height={80} 
                className="rounded-full border-4 border-primary/20 object-cover bg-gray-100"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-foreground">{testimonials[current].name}</h4>
                <p className="text-primary font-medium">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-8">
            <button onClick={prev} className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-gray-100 z-20">
              <ChevronLeft className="w-7 h-7" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-8">
            <button onClick={next} className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors border border-gray-100 z-20">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
          
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-primary w-8' : 'bg-primary/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
