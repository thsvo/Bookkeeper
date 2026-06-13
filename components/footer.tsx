"use client"

import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 border-b border-slate-800 pb-12">
          {/* Company info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">B</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Bookkeepers Touch</span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Providing reliable QuickBooks Online catch-up cleanups, monthly reconciliations, and tax-ready financial statement support for US CPAs, tax firms, and small businesses.
            </p>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-white text-base">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-colors text-left cursor-pointer">
                  QBO Cleanup & Catch-Up
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-colors text-left cursor-pointer">
                  Monthly Reconciliations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-colors text-left cursor-pointer">
                  Tax-Ready P&L & Balance Sheets
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-colors text-left cursor-pointer">
                  Accounts Payable & Receivable
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-bold text-white text-base">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span>Email: </span>
                <a href="mailto:info@bookkeeperstouch.com" className="hover:text-accent transition-colors">
                  info@bookkeeperstouch.com
                </a>
              </li>
              <li>
                <span>Phone / WhatsApp: </span>
                <a href="https://wa.me/8801747891235" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +880 1747-891235
                </a>
              </li>
              <li>
                <span>Website: </span>
                <a href="https://bookkeeperstouch.com" className="hover:text-accent transition-colors">
                  bookkeeperstouch.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            Copyright © 2026 Bookkeepers Touch. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-slate-700 hover:bg-slate-800 bg-transparent cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Get a Free Cleanup Quote
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
