"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "CODILEO transformed our online presence completely. Their attention to detail and technical expertise resulted in a 300% increase in conversions. Truly exceptional work!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, Urban Styles",
    content: "Working with CODILEO on our e-commerce platform was a game-changer. They understood our vision perfectly and delivered beyond our expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Director, GreenLife",
    content: "The landing pages CODILEO created for our campaigns consistently outperform industry benchmarks. Their strategic approach to design and development is unmatched.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            What Our Clients
            <br />
            <span className="text-primary">Say About Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with CODILEO.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
