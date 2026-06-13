"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Shield, Heart, Target } from "lucide-react"

export function TeamSection() {
  const leadership = [
    {
      name: "Rakib Uddin",
      role: "Founder & NDIS Strategy Director",
      image: "/rakib.jpg",
      description: "Rakib is the founder of NDIS Bookkeeping Australia. With a deep commitment to the disability sector, he specializes in helping participants and providers navigate the financial complexities of the NDIS with ease and confidence.",
      specialties: ["NDIS Plan Strategy", "Budget Optimization", "Compliance Oversight", "Xero & QuickBooks for NDIS", "Financial Wellness"]
    },
    {
      name: "Mujahid Hasan",
      role: "Head of NDIS Participant Relations",
      image: "/mujhaid.jpg",
      experience: "8+ years in client operations and NDIS relationship management",
      description: "Mujahid ensures every participant and provider receives personalized attention. He excels at translating complex NDIS rules into simple, actionable steps, ensuring smooth financial operations for all our clients.",
      specialties: ["Participant Advocacy", "Service Agreement Management", "PRODA Troubleshooting", "Plan Management Support"]
    },
    {
      name: "Abid Hasan",
      role: "Senior NDIS Compliance Accountant",
      image: "/abid.jpg",
      experience: "6+ years in Audit, NDIS Compliance & Financial Reporting",
      description: "Abid is a part-qualified Chartered Accountant specializing in NDIS audit readiness and provider compliance. He ensures that every claim and financial record meets the strict standards of the NDIS Commission, protecting our clients from risk.",
      specialties: ["NDIS Audit Readiness", "Provider Tax Compliance", "Complex Reconciliations", "NDIS Reporting Standards"]
    }
  ]

  const bookkeepingExperts = [
    {
      name: "Asif",
      role: "NDIS Bookkeeping Specialist",
      image: "/d256473aa68d8976500eadd1d2e87f0f.jpg",
      experience: "7+ years in specialized NDIS bookkeeping",
      description: "Asif focuses on the daily financial needs of NDIS participants and providers. From processing invoices to tracking budget utilization, he ensures every dollar is accounted for accurately.",
      specialties: ["Invoice Processing", "Budget Tracking", "Expense Categorization", "Xero for NDIS"]
    },
    {
      name: "Tanvir Ahmed",
      role: "NDIS Reporting & Support Specialist",
      image: "/TanvirAhmed.jpg",
      experience: "6+ years in NDIS financial support",
      description: "Tanvir prepares detailed monthly reports that simplify the NDIS journey for our clients. His attention to detail ensures that plan reviews are stress-free and data-driven.",
      specialties: ["NDIS Monthly Reporting", "Portal Support", "Data Accuracy", "Budget Monitoring"]
    },
      {
        name: "Jahin Sultana",
        role: "Senior Bookkeeping Specialist",
        image: "/AmeliaClarke.jpg",
        experience: "5+ years in bookkeeping and financial support",
        description: "Jahin brings dedication and professionalism to every client she supports. With expertise in managing financial records, reconciliations, and reporting, she ensures accuracy and transparency across all bookkeeping tasks.",
        specialties: ["Full Range Of Bookkeeping", "QuickBooks", "Xero", "Wave Software"]
      }
  ]

  const trustFactors = [
    {
      icon: Award,
      title: "Proven Experience",
      description: "Over 10+ years of combined expertise in bookkeeping and client management."
    },
    {
      icon: CheckCircle,
      title: "Accuracy Guaranteed",
      description: "Every report and record is double-checked for reliability."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "We handle your financial data with the highest level of security and discretion."
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "We tailor our approach to each client's unique business needs."
    },
    {
      icon: Target,
      title: "Long-Term Partnerships",
      description: "Many of our clients stay with us year after year because of our consistent support."
    }
  ]

  return (
    <section id="team" className="py-16 lg:py-24 xl:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At NDIS Bookkeeping Australia, we combine financial expertise with a deep understanding of the disability sector. Our team is dedicated to providing participants and providers with the clarity and support they need to navigate the NDIS with confidence.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We are more than just bookkeepers — we are your partners in NDIS financial success, valuing accuracy, transparency, and personal connection.
          </p>
        </div>

        {/* Leadership & Client Relations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Leadership & Client Relations
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {leadership.map((member, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                    {member.experience && (
                      <p className="text-sm text-muted-foreground mt-2">{member.experience}</p>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Bookkeeping Experts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Bookkeeping Experts
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {bookkeepingExperts.map((member, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">{member.name}</CardTitle>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.experience}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-foreground mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Clients Trust Us */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Clients Trust Us
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At NDIS Bookkeeping Australia, we understand that NDIS bookkeeping is about more than numbers — it&apos;s about ensuring you have the support you need. Our clients choose us because:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trustFactors.map((factor, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <factor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
