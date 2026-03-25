'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      });
      gsap.from(".hero-image", {
        scale: 1.05,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex flex-col items-center justify-end pt-20 overflow-hidden bg-primary/5">
      <div className="absolute inset-0 w-full h-[60vh] md:h-[70vh] top-0 z-0">
        <Image 
          src="/images/hero.png" 
          alt="Dog standing on a lush green field with a bone in its mouth" 
          fill 
          className="hero-image object-cover object-[center_30%]" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center w-full px-4 mb-20 md:mb-32 mt-auto">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-foreground drop-shadow-sm w-full leading-none">
          Unleash Your Dog's <span className="text-primary block md:inline mt-2 md:mt-0">Full Potential</span>
        </h1>
        <p className="hero-text mt-8 text-xl md:text-2xl font-medium text-foreground/80 max-w-3xl mx-auto drop-shadow-sm">
          Expert physical and online training to help you build a happier, healthier bond with your companion.
        </p>
        <div className="hero-text mt-10">
          <button className="px-10 py-5 bg-primary text-primary-foreground text-xl font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20">
            Start Training Today
          </button>
        </div>
      </div>
    </section>
  );
}
