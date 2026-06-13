"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, ArrowRight, CheckCircle2, Award } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="bg-gradient-to-br from-slate-50 via-white to-green-50/30 py-16 lg:py-24 xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center">
          {/* Left Column: Headline and Copy */}
          <div className="space-y-8 lg:space-y-10 lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full text-accent font-semibold text-sm">
                <Award className="w-4 h-4" />
                <span>QuickBooks Certified ProAdvisor Support</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight text-balance">
                Reliable QuickBooks Bookkeeping & Cleanup Support for US CPA Firms & Small Businesses
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
                Stop drowning in messy books and backlogs. We deliver crystal-clear, tax-ready financial statements so you can focus on scaling your firm and tax strategy with absolute confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8 py-6 shadow-md shadow-accent/20 transition-all hover:translate-y-[-1px] active:translate-y-[0px] cursor-pointer"
                onClick={scrollToContact}
              >
                <span>Get a Free Cleanup Quote</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-primary text-base font-semibold px-8 py-6 flex items-center justify-center space-x-2 shadow-sm transition-all hover:translate-y-[-1px] active:translate-y-[0px] cursor-pointer"
                onClick={() => window.open('https://wa.me/8801747891235?text=Hi!%20I%20am%20interested%20in%20your%20QuickBooks%20cleanup%20and%20bookkeeping%20services.', '_blank')}
              >
                <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>

            {/* Quick Benefits list */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">Tax-Ready Reports</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">100% Secure & White-Label</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">Expert QBO Cleanup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Layout with Overlays */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-square lg:aspect-[4/5] xl:aspect-[1/1]">
              {/* Background laptop workspace */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-100">
                <img
                  src="/modern-laptop-showing-accounting-software-dashboar.jpg"
                  alt="Modern laptop showing QuickBooks bookkeeping software dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Owner Professional Photo Card Overlay */}
              <Card className="absolute -bottom-2 -left-2 sm:bottom-6 sm:-left-6 p-4 bg-white/95 backdrop-blur-md shadow-xl border-slate-100 flex items-center space-x-4 max-w-[280px]">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-accent/20 flex-shrink-0">
                  <img 
                    src="/image.jpeg" 
                    alt="Rakib Uddin - QuickBooks Certified ProAdvisor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Rakib Uddin</div>
                  <div className="text-xs text-muted-foreground font-medium">QuickBooks Certified</div>
                  <div className="text-xs font-semibold text-accent mt-0.5">Founder & ProAdvisor</div>
                </div>
              </Card>

              {/* Badges/Tags Overlay */}
              <Card className="absolute -top-2 -right-2 sm:top-8 sm:-right-4 p-3 bg-white/95 backdrop-blur-sm shadow-lg border-slate-100 flex items-center space-x-2.5">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-slate-800">CPA Backlog-Ready</span>
              </Card>

              <Card className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 p-3 bg-white/95 backdrop-blur-sm shadow-lg border-slate-100 flex flex-col items-center justify-center space-y-1 max-w-[120px]">
                <img 
                  src="/certificate.jpeg" 
                  alt="QuickBooks Certified ProAdvisor Logo" 
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[10px] font-bold text-slate-700 text-center">Certified ProAdvisor</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
