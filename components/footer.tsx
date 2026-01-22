"use client"

import Image from "next/image"
import { Linkedin, Twitter, Instagram, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    services: [
      { label: t.footer.links.websiteDev, href: "#services" },
      { label: t.footer.links.ecommerce, href: "#services" },
      { label: t.footer.links.landing, href: "#services" },
      { label: t.footer.links.outsourcing, href: "#services" },
    ],
    company: [
      { label: t.footer.links.about, href: "#" },
      { label: t.footer.links.process, href: "#process" },
      { label: t.footer.links.portfolio, href: "#portfolio" },
      { label: t.footer.links.careers, href: "#" },
    ],
    legal: [
      { label: t.footer.links.privacy, href: "#" },
      { label: t.footer.links.terms, href: "#" },
      { label: t.footer.links.cookies, href: "#" },
    ]
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/codileo_logo.png"
              alt="CODILEO Logo"
              width={160}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.footer.services}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.footer.company}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.footer.legal}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CODILEO. {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.crafted}
          </p>
        </div>
      </div>
    </footer>
  )
}
