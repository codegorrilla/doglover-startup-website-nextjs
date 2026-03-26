'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Physical Demonstration',
      cta: 'Explore Physical Sessions'
    },
    {
      title: 'Video Based Consultation',
      cta: 'Explore Video Consultations'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="service-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Choose how you want us to support your dog&rsquo;s training journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-card border border-primary/20 rounded-3xl p-8 md:p-10 min-h-64 hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>

              <div className="mt-auto flex justify-end pt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-base font-semibold text-background shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
