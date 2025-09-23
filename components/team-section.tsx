"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Shield, Heart, Target } from "lucide-react"

export function TeamSection() {
  const leadership = [
    {
      name: "Rakib Uddin",
      role: "Founder & Director of Client Strategy",
      image: "/rakib.jpg",
      description: "Rakib is the founder of Bookkeeper&apos;s Touch and the first point of contact for new clients. With extensive experience in client acquisition and business development, he has helped numerous small and medium-sized businesses find clarity in their finances.",
      specialties: ["Client relations", "Bookkeeping strategy", "Financial clarity solutions", "Full Range Of Bookkeeping", "QuickBooks", "Xero", "Wave Software"]
    },
    {
      name: "Mujahid Hasan",
      role: "Head of Client Relations & Operations",
      image: "/mujhaid.jpg",
      experience: "8+ years in client operations and relationship management",
      description: "Mujahid plays a central role in handling client meetings and ensuring all client needs are met with precision. With a background in operations and strong communication skills, he ensures smooth coordination between clients and our bookkeeping team.",
      specialties: ["Client communications", "Operations management", "Workflow efficiency", "Full Range Of Bookkeeping", "QuickBooks", "Xero", "Wave Software"]
    },
    {
      name: "Abid Hasan",
      role: "Chartered Accountant & Bookkeeper",
      image: "/abid.jpg",
      experience: "6+ years in large scale local and MNCs Audit, Management Audit, due diligence",
      description: "Mr. Abid Hasan is a part qualified Chartered Accountant with more than 6 years of experience in large scale local and MNCs Audit, Management Audit, due diligence, Business and Asset Valuation, Accounting Service, Financial statement Preparation, and Internal audit. He has worked with prominent clients including Banglalink, Marico Bangladesh Limited, and TVS Auto Bangladesh Limited.",
      specialties: ["Accounts Payable & Receivable Specialist", "Payroll", "Bank Reconciliation Expert", "QuickBooks", "Xero Bookkeeping", "Financial Reporting Expert", "Tax-Ready Bookkeeping", "Cash Flow Management"]
    }
  ]

  const bookkeepingExperts = [
    {
      name: "Rebaka Sharmin",
      role: "Junior Bookkeeping Specialist",
      image: "/RebakaSharmin.jpg",
      experience: "7+ years in bookkeeping and account management",
      description: "Rebaka is dedicated to maintaining accurate records and supporting clients with day-to-day financial tasks. From financial recording to account reconciliation, she ensures businesses always have a clear financial picture.",
      specialties: ["Financial recording", "Reconciliations", "Expense management", "Full Range Of Bookkeeping", "QuickBooks", "Xero", "Wave Software"]
    },
    {
      name: "Tanvir Ahmed",
      role: "Bookkeeping & Compliance Specialist",
      image: "/TanvirAhmed.jpg",
      experience: "6+ years in bookkeeping and financial reporting",
      description: "Tanvir supports our clients with reliable and consistent bookkeeping services. He has a strong background in managing financial data and ensuring accuracy in every report.",
      specialties: ["General bookkeeping", "Financial reporting", "Compliance support", "Full Range Of Bookkeeping", "QuickBooks", "Xero", "Wave Software"]
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
            At Bookkeeper&apos;s Touch, we believe in building strong client relationships and delivering accurate, reliable financial services. Our dedicated team combines years of experience in bookkeeping, client relations, and financial management to ensure every client receives personalized support and clarity in their finances.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We are more than bookkeepers — we are trusted partners who value accuracy, transparency, and long-term success for your business.
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
              At Bookkeeper&apos;s Touch, we understand that bookkeeping is more than numbers — it&apos;s about trust. Our clients rely on us because:
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
