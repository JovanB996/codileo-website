"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Let&apos;s Build Something
            <br />
            <span className="text-primary">Amazing Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ready to transform your digital presence? Get in touch and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">office@codileo.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">(+381) 69-570-91-75</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Zemun 11080<br /> Belgrade, Serbia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your company name"
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select 
                    id="service"
                    className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="ecommerce">E-Commerce Solutions</option>
                    <option value="landing">Landing Pages</option>
                    <option value="outsourcing">IT Outsourcing</option>
                    <option value="custom">Custom Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    required
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
