import { Card } from "@/components/ui/card"
import { Heart, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 xl:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-5xl mx-auto">
            Our Commitment to the NDIS Community
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24 xl:space-y-32">
          {/* Rakib's Story */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground text-balance">
                  My name is Rakib Uddin, founder of NDIS Bookkeeping Australia.
                </h3>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>
                    I founded this company with a clear vision: to bridge the gap between complex NDIS financial requirements and the people who need clarity most. Having seen the challenges participants and providers face with plan management and compliance, I knew there was a better way.
                  </p>
                  <p>
                    Our approach is built on empathy and precision. We don&apos;t just manage numbers; we support lives by ensuring that funding is used effectively and transparently.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-man-in-casual-clothing-working-at-des.jpg"
                alt="Rakib Uddin - Founder of NDIS Bookkeeping Australia"
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
                  Specialized Support for NDIS Participants.
                </h3>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>
                    Our mission is to take the stress out of NDIS financial management. Whether you are a self-managed participant, a plan-managed individual, or an NDIS provider, we provide the expert bookkeeping and budget tracking you need to succeed.
                  </p>
                  <p>
                    We believe in the power of the NDIS to transform lives, and we are here to ensure that the financial side of that journey is smooth, compliant, and easy to understand. With NDIS Bookkeeping Australia, you gain a partner dedicated to your financial wellness.
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
                  Audit-Ready Compliance
                </h3>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl text-muted-foreground text-pretty leading-relaxed">
                  <p>
                    We understand the rigorous standards of the NDIS Quality and Safeguards Commission. That&apos;s why our processes are designed to be audit-ready from day one, providing you with the security and confidence you deserve.
                  </p>
                  <p>
                    When you work with NDIS Bookkeeping Australia, you&apos;re getting more than just a bookkeeping service—you&apos;re gaining a team of experts invested in your long-term stability and success in the NDIS ecosystem.
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
