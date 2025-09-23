"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 xl:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 lg:space-y-6 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance max-w-4xl mx-auto">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take control of your business finances? Let&apos;s discuss how Bookkeeper&apos;s Touch can help you focus on what you do best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your full name" 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business and bookkeeping needs..." 
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">bookkeeperstouch@gmail.com</p>
                    <p className="text-muted-foreground">contact@bookkeeperstouch.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Linkedin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/bookkeeperstouch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-blue-50">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground">
                    Book a free consultation to discuss your bookkeeping needs and see how we can help.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
                  >
                    Schedule a Free Consultation
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
