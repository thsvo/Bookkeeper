"use client"

import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">Bookkeeper&apos;s Touch</span>
            </div>
            <p className="text-gray-400 text-sm">Your trusted partner in financial clarity for small businesses.</p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Monthly Bookkeeping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Payroll Processing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Financial Reporting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Bank Reconciliation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cash Flow Management
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="https://calendly.com/bookkeeperstouch/bookkeeping-consultation" className="hover:text-white transition-colors">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:bookkeeperstouch@gmail.com" className="hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">© 2024 Bookkeeper&apos;s Touch. All rights reserved.</div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/bookkeeperstouch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"
              onClick={() => window.open('https://calendly.com/bookkeeperstouch/bookkeeping-consultation', '_blank')}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
