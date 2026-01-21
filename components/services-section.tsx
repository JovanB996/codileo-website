"use client"

import { Globe, ShoppingCart, Rocket, Users, Code, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom-built websites that captivate visitors and drive results. From corporate sites to personal portfolios, we craft digital experiences that stand out.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Powerful online stores that convert browsers into buyers. Complete e-commerce platforms with seamless checkout, inventory management, and analytics.",
    features: ["Payment Integration", "Product Management", "Analytics Dashboard"]
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive action. Perfect for product launches, marketing campaigns, and lead generation.",
    features: ["Conversion Focused", "A/B Testing Ready", "Fast Loading"]
  },
  {
    icon: Users,
    title: "IT Outsourcing",
    description: "Scale your development team with our expert developers. Dedicated resources, flexible engagement models, and seamless integration with your workflow.",
    features: ["Dedicated Teams", "Flexible Scaling", "Quality Assured"]
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your unique business needs. Web applications, APIs, integrations, and complex systems built to scale.",
    features: ["Scalable Architecture", "API Development", "Cloud Solutions"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Websites and applications that look stunning and perform flawlessly on every device. Mobile-first approach ensures perfect user experience everywhere.",
    features: ["Cross-Platform", "Touch Optimized", "App-Like Feel"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Everything You Need to
            <br />
            <span className="text-primary">Dominate Digital</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From concept to deployment, we provide comprehensive digital solutions that help your business thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
