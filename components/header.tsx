"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            {/* <span className="font-bold text-xl text-foreground">Bookkeeper&apos;s Touch</span> */}
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
          >
            Book a Free Consultation
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
            className="px-2"
          >
            Book Now
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Team
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Contact
            </a>
            <div className="pt-4 border-t border-border">
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
              >
                Book a Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
