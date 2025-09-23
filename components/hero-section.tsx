"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calculator, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24 xl:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
                Bookkeeper&apos;s Touch{" "}
                <span className="inline-flex items-center space-x-2">
                  <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <Calculator className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                  </span>
                  <span className="w-8 h-8 lg:w-10 lg:h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                  </span>
                  <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-300 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 text-blue-700" />
                  </span>
                </span>{" "}
                Your Trusted Partner in Financial Clarity
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
                We help small businesses stay on top of their finances with accurate bookkeeping, clear reporting, and reliable support. With us, you can focus on growing your business while we handle the numbers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
                onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="/modern-laptop-showing-accounting-software-dashboar.jpg"
                alt="Modern laptop showing accounting software dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              <Card className="absolute top-4 right-4 lg:top-6 lg:right-6 p-3 lg:p-4 bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm lg:text-base font-medium">Books Updated</span>
                </div>
              </Card>

              <Card className="absolute bottom-8 left-4 lg:bottom-12 lg:left-6 p-4 lg:p-6 bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="space-y-2">
                  <div className="text-sm lg:text-base text-muted-foreground">Monthly Revenue</div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">$15,420</div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="text-sm lg:text-base">+18%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
