import { Card, CardContent } from "@/components/ui/card"
import { Lock, Settings, Calendar, ShieldCheck, Check } from "lucide-react"

export function PartnershipSection() {
  const pillars = [
    {
      icon: Lock,
      title: "100% Data Confidentiality & Secure Workflows",
      description: "We use top-tier security measures, NDAs, and secure portal logins to keep your clients' data completely safe."
    },
    {
      icon: Settings,
      title: "QuickBooks Online & Xero Certified Expertise",
      description: "Our team consists of certified specialists who know these platforms inside-out to prevent error backlogs."
    },
    {
      icon: Calendar,
      title: "Strict Deadline Adherence & Clear Communication",
      description: "We deliver reconciliations and reports on time, every month, keeping you informed at every milestone."
    }
  ]

  return (
    <section id="partnership" className="py-16 lg:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: B2B Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-accent/20 px-3 py-1 rounded-full border border-accent/30">
                B2B Partnership
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Dedicated Backend Support for Accounting Professionals
              </h2>
              <h3 className="text-xl font-bold text-accent">
                Let Us Handle the Grunt Work. You Focus on Strategy.
              </h3>
            </div>

            <div className="text-slate-300 text-base sm:text-lg space-y-6 leading-relaxed">
              <p>
                As a Fractional CFO, CPA, or Tax Consultant, your time is best spent on high-value advisory and tax scaling. 
                <span className="font-semibold text-white"> Bookkeepers Touch</span> acts as your invisible, silent back-office partner.
              </p>
              <p className="bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl text-slate-200">
                We offer <span className="text-accent font-bold">100% White-Label Support</span>, meaning we clean and prepare the books under your firm’s brand, allowing you to increase your capacity and scale your revenue seamlessly.
              </p>
            </div>

            {/* Trust Pillars */}
            <div className="space-y-4 pt-4">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-400 text-sm mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Founder Image with Certified Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/40 bg-slate-800">
              <img 
                src="/image2.jpeg" 
                alt="Rakib Uddin - QuickBooks Certified ProAdvisor & Founder"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Bottom Info Gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent p-6 pt-20">
                <div className="space-y-1">
                  <div className="text-xs font-bold tracking-widest text-accent uppercase">Founder & Leader</div>
                  <h4 className="text-xl font-bold text-white">Rakib Uddin</h4>
                  <p className="text-sm text-slate-400">QuickBooks Online Certified ProAdvisor</p>
                </div>
                
                {/* Check list */}
                <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-slate-800">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <span className="inline-block px-2 py-0.5 bg-accent text-[10px] font-bold text-white rounded-md uppercase">US GAAP</span>
                    <span className="inline-block px-2 py-0.5 bg-accent/80 text-[10px] font-bold text-white rounded-md uppercase ml-1">Cleanup Specialist</span>
                  </div>
                </div>
              </div>

              {/* Absolute Badge */}
              <Card className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border-slate-800 p-2 shadow-lg">
                <div className="flex items-center space-x-1 text-accent">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-bold text-white">Verified Partner</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
