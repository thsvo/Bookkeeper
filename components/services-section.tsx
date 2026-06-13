import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  History, 
  RefreshCcw, 
  FileText, 
  Receipt 
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: History,
      title: "Historical Bookkeeping Cleanup & Catch-Up",
      description: "Behind on books for 6 months, a year, or multiple years? We dig deep into your messy ledgers, sort un-reconciled statements, eliminate duplicates, and bring your financial history completely up-to-date.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: RefreshCcw,
      title: "Monthly Bookkeeping & Bank Reconciliation",
      description: "Continuous management of daily transactions. We ensure every single dollar in your bank, credit card, or PayPal account perfectly matches your QuickBooks records at the end of every month.",
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      icon: FileText,
      title: "Tax-Ready Financial Reporting",
      description: "Receive pristine, accurate Profit & Loss (P&L) Statements and Balance Sheets every single month. Your books will be 100% ready for tax filing with no last-minute panic.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Receipt,
      title: "Accounts Payable & Receivable (A/P & A/R)",
      description: "Streamlining your cash flow. We track your vendor bills, manage client invoicing, and ensure you get paid on time while maintaining proper financial control.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <div className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            Our Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary text-balance max-w-4xl mx-auto">
            Our Core Bookkeeping Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial management tailored for US CPAs, tax professionals, and growing business owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border border-slate-100 hover:border-accent/20 hover:shadow-xl transition-all duration-300 p-6 bg-slate-50/50">
              <CardHeader className="space-y-4 p-0 pb-4">
                <div
                  className={`w-12 h-12 rounded-2xl border ${service.color} flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-600 text-sm leading-relaxed">
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
