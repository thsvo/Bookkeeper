import { Card } from "@/components/ui/card"
import { Heart, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 xl:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-5xl mx-auto">
            Who I Am & Why I Started Bookkeeping
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24 xl:space-y-32">
          {/* Rakib's Story */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground text-balance">
                  My name is Rakib Uddin, and I'm the founder of Bookkeeper&apos;s Touch.
                </h3>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>
                    Numbers have always made sense to me—where others see stress and confusion, I see clarity and order. Over the years, I noticed that many small business owners were passionate about their work but struggled to stay on top of their finances.
                  </p>
                  <p>
                    Bookkeeping often felt overwhelming, distracting them from the very thing they loved most—running and growing their business.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-man-in-casual-clothing-working-at-des.jpg"
                alt="Rakib Uddin - Founder of Bookkeeper&apos;s Touch"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <Card className="absolute top-4 right-4 lg:top-6 lg:right-6 p-3 lg:p-4 bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-600" />
                  <span className="text-sm lg:text-base font-medium">Passionate About Numbers</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="lg:order-1 space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground text-balance">
                  That's why I started Bookkeeper&apos;s Touch.
                </h3>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>
                    My mission is simple: to take the weight of bookkeeping off your shoulders, so you can focus on what you do best. I believe every business, no matter its size, deserves accurate financial records, clear reporting, and someone they can trust with their numbers.
                  </p>
                  <p>
                    With a personal, detail-oriented approach, I work alongside small business owners as a partner—not just a bookkeeper. At Bookkeeper&apos;s Touch, you don't just get financial clarity—you get peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-2 relative">
              <img
                src="/business-consultation-meeting-with-woman-and-child.jpg"
                alt="Business consultation meeting"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <Card className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 p-3 lg:p-4 bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-sm lg:text-base font-medium">Your Trusted Partner</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground text-balance">
                  Personal, detail-oriented approach
                </h3>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>
                    I understand that every business is unique. That's why I take the time to understand your specific needs and challenges, providing personalized bookkeeping solutions that grow with your business.
                  </p>
                  <p>
                    When you work with Bookkeeper&apos;s Touch, you're not just getting a service—you're gaining a partner who's invested in your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/entrepreneur-working-on-laptop-in-modern-workspace.jpg"
                alt="Personal approach to bookkeeping"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <Card className="absolute top-4 right-4 lg:top-6 lg:right-6 p-3 lg:p-4 bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm lg:text-base font-medium">Personal Touch</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
