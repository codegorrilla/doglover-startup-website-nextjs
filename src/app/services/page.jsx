import Header from "@/components/Header";
import { CheckCircle2, ChevronRight, PlayCircle, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Training Services | Pawsitive Training",
  description: "Monthly subscription plans for physical demonstration and online video consultation.",
};

export default function ServicesPage() {
  const plans = [
    {
      id: "physical",
      title: "Physical Demonstration",
      price: "$199",
      period: "/month",
      icon: <MapPin className="w-10 h-10 text-primary" />,
      description: "Hands-on, in-person training sessions designed to correct behaviors and build obedience in real-world environments.",
      features: [
        "4 in-person sessions per month (1 hour each)",
        "Real-world distraction proofing",
        "Leash walking & recall training",
        "Socialization with other dogs",
        "Direct feedback and behavioral correction",
        "Access to exclusive weekend pack walks"
      ],
      popular: true
    },
    {
      id: "online",
      title: "Online Video Consultation",
      price: "$99",
      period: "/month",
      icon: <PlayCircle className="w-10 h-10 text-secondary" />,
      description: "Convenient remote training sessions perfect for busy schedules, foundational advice, and puppy basics.",
      features: [
        "4 live video sessions per month (45 mins each)",
        "Customized weekly training plan PDFs",
        "Video review of your practice sessions",
        "24/7 email & chat support",
        "Access to pre-recorded training library",
        "Basic obedience and potty training guides"
      ],
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans pt-20">
      <Header />
      
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center mt-8">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Choose Your <span className="text-primary block md:inline">Training Plan</span></h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-4 max-w-2xl mx-auto">
            Simple, transparent monthly pricing for expert dog training services.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative bg-card rounded-3xl p-8 md:p-12 border transition-all duration-300 hover:shadow-2xl flex flex-col ${plan.popular ? 'border-primary shadow-xl shadow-primary/20' : 'border-gray-200 dark:border-gray-800 shadow-lg'}`}>
              
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-primary-foreground font-bold px-6 py-2 rounded-full text-sm tracking-widest uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className="p-5 bg-primary/10 rounded-2xl w-fit">
                  {plan.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{plan.title}</h2>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-black text-primary">{plan.price}</span>
                    <span className="text-foreground/60 font-medium text-lg">{plan.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground/80 mb-10 min-h-[80px] leading-relaxed">
                {plan.description}
              </p>

              <div className="flex-grow border-t border-gray-100 dark:border-gray-800 pt-8">
                <h3 className="text-xl font-bold mb-6">What's Included:</h3>
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-lg leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`#`} className="w-full mt-auto">
                <button className={`w-full py-5 rounded-2xl font-bold text-xl transition-all shadow-md flex items-center justify-center gap-2 ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]' : 'bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02]'}`}>
                  Subscribe Now <ChevronRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
