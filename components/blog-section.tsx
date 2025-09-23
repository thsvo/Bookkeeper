"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, AlertTriangle, BarChart3, FileText, Users } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      icon: BookOpen,
      title: "Why Every Small Business Needs Proper Bookkeeping",
      excerpt: "Bookkeeping is often seen as a tedious task, but for small business owners, it&apos;s one of the most important practices for long-term success. Accurate bookkeeping keeps your financial records organized...",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: AlertTriangle,
      title: "Top 5 Bookkeeping Mistakes Small Business Owners Make",
      excerpt: "Even the most diligent business owners can make mistakes when it comes to bookkeeping. Here are the top five pitfalls that could cost you money and stress...",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BarChart3,
      title: "How Accurate Financial Reports Help You Make Smarter Business Decisions",
      excerpt: "Financial reports are more than numbers—they're a roadmap to your business's future. Reports like profit and loss statements provide insights into where your money is coming from...",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: FileText,
      title: "Bookkeeping vs. Accounting: What's the Difference?",
      excerpt: "Many small business owners confuse bookkeeping with accounting, but they serve different purposes. Bookkeeping involves recording daily transactions, managing accounts payable...",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "The Benefits of Outsourcing Your Bookkeeping",
      excerpt: "Outsourcing bookkeeping is a smart choice for small business owners who want to save time, reduce stress, and improve accuracy. Key benefits include time savings, cost efficiency...",
      color: "bg-teal-100 text-teal-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from our expertise. Discover tips, insights, and best practices to help you manage your business finances better.
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
            onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
          >
            Get Expert Bookkeeping Advice
          </Button>
        </div>
      </div>
    </section>
  )
}
