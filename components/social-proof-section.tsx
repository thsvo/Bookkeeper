"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Award, Star } from "lucide-react"

export function SocialProofSection() {
  const testimonials = [
    { src: "/testominal.jpeg", alt: "Fiverr 5-Star Review Screenshot 1" },
    { src: "/testominal2.jpeg", alt: "Fiverr 5-Star Review Screenshot 2" },
    { src: "/testominal3.jpeg", alt: "Fiverr 5-Star Review Screenshot 3" },
    { src: "/testominal4.jpeg", alt: "Fiverr 5-Star Review Screenshot 4" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            Social Proof & Authority
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Proven Expertise. Trusted Results.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We let our credentials and our clients speak for us. Here is the proof of our certified QuickBooks training and real 5-star customer experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-primary flex items-center space-x-2">
              <Award className="w-6 h-6 text-accent" />
              <span>Certified Professional Credentials</span>
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              We are officially certified by Intuit as a **QuickBooks Online ProAdvisor**. This guarantees that your historical cleanups, reconciliations, and bookkeeping reports are managed in strict compliance with the latest software standards and accounting practices.
            </p>

            <Card className="overflow-hidden border border-slate-200 shadow-lg group bg-white">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                  <img
                    src="/certificate.jpeg"
                    alt="QuickBooks Online Certified ProAdvisor Certificate"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm font-bold text-primary">QuickBooks Online ProAdvisor</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Intuit Verification Certified</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Testimonial Carousel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-primary flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span>Fiverr 5-Star Client Reviews</span>
              </h3>
              
              {/* Carousel Nav Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors cursor-pointer shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors cursor-pointer shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Carousel display box */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                {/* Current Slide */}
                <img
                  src={testimonials[currentIndex].src}
                  alt={testimonials[currentIndex].alt}
                  className="max-w-full max-h-full object-contain p-2 sm:p-4 select-none animate-fadeIn"
                  key={currentIndex}
                />
              </div>

              {/* Dots navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-accent w-6" 
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Warren Testimonial text block */}
              <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">Verified 5.0 Review</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "Rakib did an incredible job cleaning up our messy QuickBooks transactions. He balanced our bank accounts, cleared uncategorized items, and left our books 100% tax-ready. Excellent communicator!"
                </p>
                <div className="text-xs font-bold text-primary mt-2">— Warren, US Real Estate Business Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
