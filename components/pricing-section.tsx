"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$99",
      period: "/month",
      description: "Best for: Small businesses just starting with bookkeeping or looking for minimal monthly support.",
      features: [
        "Monthly bookkeeping & transaction recording up to 120",
        "Bank reconciliation",
        "Basic financial reports",
        "QuickBooks/Xero/Wave setup if needed"
      ],
      note: "This plan is perfect if you just need someone to keep your books organized and up-to-date without spending too much time on bookkeeping.",
      popular: false
    },
    {
      name: "Standard Plan",
      price: "$199",
      period: "/month",
      description: "Best for: Growing businesses that need more detailed reporting and support.",
      features: [
        "Everything in the Basic Plan",
        "Transaction recording up to 250",
        "Monthly P&L, Balance Sheet & Cash Flow statements",
        "Accounts payable/receivable tracking",
        "Unlimited bookkeeping support via email/chat"
      ],
      note: "This plan helps business owners see a clear picture of their finances every month so they can make informed decisions and focus on growth.",
      popular: true
    },
    {
      name: "Premium Plan",
      price: "$299",
      period: "/month",
      description: "Best for: Businesses with complex finances or multiple accounts.",
      features: [
        "Everything in the Standard Plan",
        "Transaction recording up to 350",
        "Catch-up bookkeeping (if books are behind)",
        "Payroll setup & management (optional add-on)",
        "Inventory and sales tracking support",
        "Monthly consultation call with Support Team"
      ],
      note: "Or offer custom quote (Contact for tailored pricing).",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-16 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include our commitment to accuracy and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-4">
                    {plan.note}
                  </p>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    }`}
                    onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
                  >
                    {plan.name === 'Premium Plan' ? 'Contact for Custom Quote' : 'Get Started'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
