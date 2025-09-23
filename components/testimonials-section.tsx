import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 xl:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with Bookkeeper&apos;s Touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Large testimonial card */}
          <Card className="lg:col-span-2 bg-blue-600 text-white border-0">
            <CardContent className="p-8 lg:p-12 xl:p-16 space-y-6 lg:space-y-8">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-bold">5.0</div>
              <div className="space-y-4 lg:space-y-6">
                <p className="text-xl lg:text-2xl xl:text-3xl font-medium">"Rakib saved my business from financial chaos"</p>
                <p className="text-blue-100 text-base lg:text-lg xl:text-xl leading-relaxed">
                  I was drowning in receipts and spreadsheets when I found Bookkeeper&apos;s Touch. Rakib took over my bookkeeping completely and now I have peace of mind knowing my finances are in expert hands. I can finally focus on growing my business instead of worrying about the numbers.
                </p>
              </div>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img
                  src="/professional-headshot-of-smiling-business-owner.jpg"
                  alt="Client testimonial"
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                />
                <div>
                  <div className="font-medium text-base lg:text-lg">Sarah Johnson</div>
                  <div className="text-blue-200 text-sm lg:text-base">Founder, Creative Studio</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smaller testimonial cards */}
          <div className="space-y-8 lg:space-y-12">
            <Card className="bg-green-600 text-white border-0">
              <CardContent className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm lg:text-base leading-relaxed">
                  "Rakib's attention to detail is incredible. He caught errors that could have cost me thousands during tax season. Worth every penny!"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src="/business-executive-headshot.jpg"
                    alt="Client testimonial"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-sm lg:text-base">Michael Chen</div>
                    <div className="text-green-200 text-xs lg:text-sm">Owner, Local Restaurant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  "Professional, responsive, and incredibly knowledgeable. Bookkeeper&apos;s Touch transformed how I manage my business finances."
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src="/female-entrepreneur-headshot.jpg"
                    alt="Client testimonial"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-sm lg:text-base">Emma Rodriguez</div>
                    <div className="text-muted-foreground text-xs lg:text-sm">CEO, Digital Marketing Agency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
