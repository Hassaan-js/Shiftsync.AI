'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">ShiftSync AI</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <button className="px-6 py-2 bg-accent text-background rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Gradient background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-muted border border-border rounded-full text-sm text-accent">
            ✨ Powered by Advanced AI
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Smart Shift
            <br />
            <span className="gradient-text">Scheduling</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Automate your workforce scheduling with AI. Optimize team coverage, reduce labor costs, and improve employee satisfaction with intelligent shift management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 text-lg"
            >
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-muted border border-border text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors text-lg">
              Watch Demo
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • 14 days free • Full access to all features
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="glass-effect rounded-2xl p-1 overflow-hidden">
            <div className="bg-muted rounded-xl p-8">
              <div className="grid grid-cols-12 gap-4">
                {/* Left sidebar */}
                <div className="col-span-3 space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 bg-background rounded-lg"></div>
                  ))}
                </div>
                {/* Main content */}
                <div className="col-span-9 space-y-4">
                  <div className="h-8 bg-background rounded-lg w-1/3"></div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-background rounded-lg p-4 space-y-3">
                        <div className="h-6 bg-border rounded w-2/3"></div>
                        <div className="h-4 bg-border rounded w-1/2"></div>
                        <div className="h-4 bg-border rounded w-1/3"></div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-background rounded-lg p-4 h-32"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Scheduling',
                description: 'Intelligent algorithms that optimize shifts based on employee availability, skills, and preferences.',
                icon: '🤖',
              },
              {
                title: 'Real-time Adjustments',
                description: 'Instantly handle call-outs, swaps, and schedule changes with automated conflict resolution.',
                icon: '⚡',
              },
              {
                title: 'Employee Portal',
                description: 'Let employees view schedules, request time off, and swap shifts seamlessly.',
                icon: '👥',
              },
              {
                title: 'Cost Optimization',
                description: 'Reduce overtime and labor costs while maintaining optimal team coverage.',
                icon: '💰',
              },
              {
                title: 'Analytics Dashboard',
                description: 'Gain insights into labor costs, productivity, and team efficiency metrics.',
                icon: '📊',
              },
              {
                title: 'Compliance Ready',
                description: 'Automatically ensure labor law compliance and generate required reports.',
                icon: '✅',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-effect rounded-xl p-8 hover:border-accent/50 transition-colors group hover:bg-muted/80"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose ShiftSync?</h2>
              <ul className="space-y-4">
                {[
                  '40% reduction in scheduling time',
                  '25% lower labor costs on average',
                  '95% employee satisfaction rate',
                  'Seamless integration with your tools',
                  '24/7 dedicated support',
                  'SOC 2 Type II compliant',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-effect rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-muted-foreground text-center">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Ready to Transform Your Scheduling?</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of companies already using ShiftSync AI to optimize their workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 text-lg">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-muted border border-border text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-muted-foreground">&copy; 2024 ShiftSync AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
