"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, AlertTriangle, BarChart3, FileText, Users } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      icon: BookOpen,
      title: "Understanding the NDIS Price Guide: A Bookkeeper's Guide",
      excerpt: "The NDIS Price Guide can be complex. We break down the key categories and how to ensure your service agreements align with the latest NDIS pricing standards...",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: AlertTriangle,
      title: "Common NDIS Audit Pitfalls & How to Avoid Them",
      excerpt: "Don't let an NDIS Commission audit catch you off guard. Learn the top documentation mistakes providers make and how to keep your books audit-ready...",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Mastering Budget Tracking for Self-Managed Participants",
      excerpt: "Self-managing your NDIS plan gives you choice and control, but it also comes with financial responsibility. Here's a simple roadmap to tracking your funds...",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: FileText,
      title: "Service Agreements: What NDIS Providers Need to Know",
      excerpt: "A well-structured service agreement is the foundation of a good provider-participant relationship. Learn the essential financial clauses for compliance...",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "The Role of a Bookkeeper in NDIS Plan Management",
      excerpt: "Discover how a specialized NDIS bookkeeper can help you maximize your plan's value while ensuring every cent is spent according to your goals...",
      color: "bg-teal-100 text-teal-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            NDIS Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest NDIS financial updates. Discover tips and best practices for managing your plan or provider agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${post.color} flex items-center justify-center`}>
                  <post.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
            onClick={() => window.open('https://calendly.com/ndisbookkeeping/consultation', '_blank')}
          >
            Get Expert NDIS Advice
          </Button>
        </div>
      </div>
    </section>
  )
}
