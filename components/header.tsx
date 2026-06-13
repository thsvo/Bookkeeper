"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Calculator } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-8">
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2 text-left hover:opacity-90">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-accent" />
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">Bookkeepers Touch</span>
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("pain-points")} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("partnership")} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              B2B Partner Support
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Reviews & Credentials
            </button>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm"
            onClick={() => scrollToSection("contact")}
          >
            Get a Free Cleanup Quote
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => scrollToSection("contact")}
            className="border-accent text-accent hover:bg-accent/10"
          >
            Get Quote
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection("pain-points")} 
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer font-medium"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("partnership")} 
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer font-medium"
            >
              B2B Partner Support
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer font-medium"
            >
              Reviews & Credentials
            </button>
            <div className="pt-4 border-t border-border">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => scrollToSection("contact")}
              >
                Get a Free Cleanup Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
