import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  CreditCard, 
  Users, 
  Building2, 
  BookOpen, 
  BarChart3, 
  DollarSign, 
  CheckCircle 
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: "📅 Monthly Bookkeeping",
      description: "We handle your monthly records and transactions, keeping your books accurate and up to date.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: CreditCard,
      title: "💳 Accounts Payable & Receivable",
      description: "We track what you owe and what you're owed, ensuring bills and payments are managed on time.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "👥 Payroll Processing",
      description: "We take care of employee payments, deductions, and reports—so payroll runs smoothly every time.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Building2,
      title: "🏦 Bank Reconciliation",
      description: "We match your records with your bank statements to ensure accuracy and catch any errors early.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: BookOpen,
      title: "📘 General Bookkeeping",
      description: "From recording expenses to organizing income, we manage all your day-to-day bookkeeping tasks.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: BarChart3,
      title: "📊 Financial Reporting",
      description: "We provide clear reports that show how your business is performing, helping you make smarter decisions.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: DollarSign,
      title: "💰 Cash Flow Management",
      description: "We help you track money coming in and going out, so you never lose sight of your financial health.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: CheckCircle,
      title: "✅ Full Range of Bookkeeping",
      description: "Whether it&apos;s one service or all of them, we offer complete bookkeeping support tailored to your business needs.",
      color: "bg-blue-100 text-blue-600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 xl:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 id="services" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            Complete Bookkeeping Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From monthly bookkeeping to financial reporting, we provide comprehensive solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-shadow p-4">
              <CardHeader className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
