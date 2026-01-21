"use client"

import { MessageSquare, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description: "We dive deep into your business, understanding your goals, target audience, and competitive landscape to craft a winning strategy."
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Prototype",
    description: "Our designers create stunning visuals and interactive prototypes, ensuring every pixel serves a purpose and aligns with your brand."
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Testing",
    description: "Our engineers bring designs to life with clean, scalable code. Rigorous testing ensures everything works flawlessly."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your project with precision and provide ongoing support to ensure continued success and growth."
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            From Idea to Reality
            <br />
            <span className="text-primary">In Four Steps</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Our proven methodology ensures every project is delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
