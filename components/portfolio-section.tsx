"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "TechFlow SaaS Platform",
    category: "Web Application",
    description: "A comprehensive SaaS dashboard for managing business workflows and team collaboration.",
    image: "/images/portfolio-1.jpg",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Urban Fashion Store",
    category: "E-Commerce",
    description: "Modern e-commerce platform with seamless checkout and inventory management.",
    image: "/images/portfolio-2.jpg",
    tags: ["Next.js", "Stripe", "Shopify"]
  },
  {
    title: "FinanceHub Dashboard",
    category: "Web Application",
    description: "Real-time financial analytics dashboard with advanced data visualization.",
    image: "/images/portfolio-3.jpg",
    tags: ["TypeScript", "D3.js", "AWS"]
  },
  {
    title: "GreenLife Organic",
    category: "E-Commerce",
    description: "Sustainable e-commerce platform for organic products with subscription features.",
    image: "/images/portfolio-4.jpg",
    tags: ["Vue.js", "WooCommerce", "PHP"]
  }
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Projects That Speak
            <br />
            <span className="text-primary">For Themselves</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Every project is a story of collaboration, innovation, and exceptional results. 
            Here are some of our proudest achievements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary bg-transparent">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
