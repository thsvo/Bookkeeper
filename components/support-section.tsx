import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export function SupportSection() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground text-balance">
            From founding to filing and beyond, we're with you
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Accountants that know your business</h3>
              <p className="text-muted-foreground text-pretty">
                Our dedicated team of qualified accountants takes the time to understand your business, industry, and
                goals. You'll work with the same accountant throughout your journey, ensuring consistency and deep
                knowledge of your finances.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Dedicated account manager</h4>
                  <p className="text-sm text-muted-foreground">
                    Your personal point of contact for all accounting needs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Industry expertise</h4>
                  <p className="text-sm text-muted-foreground">Specialized knowledge in your business sector</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Proactive support</h4>
                  <p className="text-sm text-muted-foreground">We reach out before issues become problems</p>
                </div>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Meet your team</Button>
          </div>

          <div className="relative">
            <img
              src="/diverse-team-of-professional-accountants-smiling.jpg"
              alt="Team of professional accountants"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <Card className="absolute bottom-4 right-4 p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/modern-laptop-showing-accounting-software-dashboar.jpg"
              alt="Accounting software dashboard"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Smart software made for business owners</h3>
              <p className="text-muted-foreground text-pretty">
                Our intuitive platform gives you real-time insights into your business finances. Track expenses, monitor
                cash flow, and generate reports with just a few clicks.
              </p>
            </div>

            <Button variant="outline">Explore features</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
