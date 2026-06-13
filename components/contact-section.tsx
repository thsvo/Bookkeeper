"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // compile text and open in whatsapp
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const role = formData.get("role")
    const backlog = formData.get("backlog")
    const message = formData.get("message")
    
    const text = `Hi Bookkeepers Touch! I'd like to get in touch.
Name: ${name}
Email: ${email}
Role/Firm: ${role}
Backlog: ${backlog}
Message: ${message}`

    window.open(`https://wa.me/8801747891235?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <div className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary text-balance max-w-4xl mx-auto">
            Ready to Transform Your Financial Clarity?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation today to discuss your cleanup backlog or firm bookkeeping overflow requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border border-slate-200 bg-slate-50/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-primary">
                    Name *
                  </Label>
                  <Input 
                    id="name" 
                    name="name"
                    type="text" 
                    required
                    placeholder="Your full name" 
                    className="w-full bg-white border-slate-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-primary">
                    Email *
                  </Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    required
                    placeholder="your.email@example.com" 
                    className="w-full bg-white border-slate-200"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-semibold text-primary">
                      I am a *
                    </Label>
                    <select 
                      id="role" 
                      name="role"
                      required
                      className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <option value="CPA / Tax Firm Owner">CPA / Tax Firm Owner</option>
                      <option value="Fractional CFO">Fractional CFO</option>
                      <option value="Small Business Owner">Small Business Owner</option>
                      <option value="Other Professional">Other Professional</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backlog" className="text-sm font-semibold text-primary">
                      Cleanup Backlog *
                    </Label>
                    <select 
                      id="backlog" 
                      name="backlog"
                      required
                      className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <option value="None / Current">None / Current</option>
                      <option value="1-3 Months">1-3 Months Behind</option>
                      <option value="4-6 Months">4-6 Months Behind</option>
                      <option value="7-12 Months">7-12 Months Behind</option>
                      <option value="1+ Years">1+ Years Behind</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-primary">
                    How can we help? *
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Tell us about your cleanup backlog or firm bookkeeping overflow needs..." 
                    className="w-full min-h-[120px] resize-none bg-white border-slate-200"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md cursor-pointer"
                >
                  Send & Connect on WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary">Email Support</h3>
                    <p className="text-slate-600 hover:text-primary transition-colors mt-0.5">
                      <a href="mailto:info@bookkeeperstouch.com">info@bookkeeperstouch.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary">WhatsApp Call & Chat</h3>
                    <p className="text-slate-600 hover:text-primary transition-colors mt-0.5">
                      <a href="https://wa.me/8801747891235" target="_blank" rel="noopener noreferrer">+880 1747-891235</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Linkedin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary">LinkedIn Professional</h3>
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 hover:underline text-sm font-semibold mt-1 inline-block"
                    >
                      Connect with Rakib Uddin
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-slate-900 text-white">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Need an Immediate Consultation?
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Schedule a free 15-minute discovery call directly. We'll go over your bookkeeping requirements, current software settings, and cleanup needs.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md cursor-pointer"
                    onClick={() => window.open('https://wa.me/8801747891235?text=Hi!%20I%20would%20like%20to%20book%20a%2015-minute%20discovery%20call%20for%20bookkeeping%20support.', '_blank')}
                  >
                    Schedule My Discovery Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
