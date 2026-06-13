import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, AlertCircle, ShieldAlert } from "lucide-react"

export function PainPointSection() {
  const painPoints = [
    {
      icon: Briefcase,
      category: "CPAs & Tax Firms",
      description: "Overwhelmed by client bookkeeping overflow during tax season? Protect your billable hours by outsourcing the backend grunt work.",
      highlight: "Outsource & scale capacity"
    },
    {
      icon: AlertCircle,
      category: "Months Behind?",
      description: "Hidden transaction errors, un-reconciled credit cards, and \"uncategorized\" balances messing up your reports?",
      highlight: "Full historical catch-up"
    },
    {
      icon: ShieldAlert,
      category: "Compliance Risks",
      description: "Worried about inaccurate financials causing major headaches during audits or tax filings?",
      highlight: "100% Tax-Ready accuracy"
    }
  ]

  return (
    <section id="pain-points" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Is Messy Bookkeeping Stalling Your Firm's Growth?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Messy books steal your focus. We step in to clean up the backend clutter so you can focus on your high-value tax strategies and client relationships.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <Card 
                key={index} 
                className="border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">
                      {point.category}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Highlight Pill */}
                  <div className="pt-2">
                    <span className="inline-block text-xs font-semibold text-accent bg-accent/5 px-2.5 py-1 rounded-md border border-accent/10">
                      {point.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Software Integrations Banner */}
        <div className="border-t border-slate-200/80 pt-12 text-center space-y-8">
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
            Specialized Bookkeeping Using Industry-Leading Tools
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors">
              <span className="font-extrabold text-lg sm:text-xl text-[#2ca01c]">QuickBooks</span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors">
              <span className="font-extrabold text-lg sm:text-xl text-[#13B5EA]">Xero</span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors">
              <span className="font-extrabold text-lg sm:text-xl text-[#0b519c]">Wave</span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors">
              <span className="font-extrabold text-lg sm:text-xl text-[#0075FF]">FreshBooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
