'use client';
import { useEffect, useRef } from 'react';
import { Video, MapPin, CheckCircle2 } from 'lucide-react';
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
      title: "Physical Demonstration",
      icon: <MapPin className="w-10 h-10 text-primary" />,
      description: "In-person sessions focusing on behavioral corrections and obedience in real-world scenarios.",
      features: ["1-on-1 interaction", "Real-world distraction training", "Immediate feedback"]
    },
    {
      title: "Online Video Consultation",
      icon: <Video className="w-10 h-10 text-primary" />,
      description: "Flexible, remote training sessions perfect for busy schedules and foundational advice.",
      features: ["Flexible scheduling", "Recorded sessions", "Customized training plans"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="service-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect training mode for your companion. We offer flexible options to fit your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-card border border-primary/20 rounded-3xl p-8 lg:p-12 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground/80 text-lg mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/services" className="w-full">
                <button className="w-full py-4 rounded-xl bg-foreground text-background font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all shadow-md">
                  Subscribe
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
