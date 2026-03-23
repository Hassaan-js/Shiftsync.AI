'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b premium-border bg-background/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-light tracking-tighter">ShiftSync</div>
            <div className="text-muted-foreground text-xs tracking-widest uppercase">AI</div>
          </div>
          <div className="hidden md:flex gap-12">
            <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Product</a>
            <a href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Capabilities</a>
            <a href="#enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Enterprise</a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Security</a>
          </div>
          <button className="px-5 py-2 text-sm bg-accent text-background rounded hover:bg-accent/90 transition-all duration-200 font-medium">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 overflow-hidden hero-background">
        <div className="absolute inset-0 subtle-grid -z-10"></div>
        {/* Top right accent glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl -z-10 accent-ring"></div>
        {/* Bottom left accent glow */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl -z-10" style={{background: 'radial-gradient(circle, rgba(51, 153, 255, 0.15) 0%, transparent 70%)'}}></div>
        {/* Center decorative element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl blur-3xl -z-10" style={{background: 'radial-gradient(ellipse 150% 100% at 50% 50%, rgba(51, 153, 255, 0.08) 0%, transparent 50%)'}}></div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="line-separator"></div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Next-generation platform</span>
            </div>

            <h1 className="text-7xl lg:text-8xl font-light leading-tight max-w-5xl">
              Workforce optimization
              <br />
              <span className="text-accent">redefined</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed pt-4">
              Enterprise-grade shift scheduling powered by advanced algorithms. Reduce operational costs, improve team productivity, and enhance employee satisfaction with AI-driven workforce management.
            </p>
          </div>

          <div className="flex gap-4 pt-8">
            <button className="px-6 py-3 bg-accent text-background rounded hover:bg-accent/90 transition-all duration-200 font-medium text-sm">
              Request Demo
            </button>
            <button className="px-6 py-3 premium-border rounded hover:bg-muted/40 transition-all duration-200 font-medium text-sm">
              Explore Platform
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="premium-border rounded-lg p-1 overflow-hidden">
            <div className="bg-muted/30 rounded-lg aspect-video flex items-center justify-center border premium-border">
              <div className="text-center space-y-4">
                <div className="text-muted-foreground text-sm uppercase tracking-widest">Dashboard Preview</div>
                <div className="w-64 h-40 mx-auto bg-gradient-to-b from-accent/10 to-transparent rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 space-y-4">
            <div className="flex items-center gap-3">
              <div className="line-separator"></div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Capabilities</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light">
              Built for enterprise scale
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Intelligent Optimization',
                description: 'Machine learning algorithms continuously learn from your workforce patterns to improve scheduling accuracy and reduce manual intervention.',
              },
              {
                title: 'Real-time Intelligence',
                description: 'Instantly adapt to changes with automated shift adjustments, conflict resolution, and predictive analytics.',
              },
              {
                title: 'Compliance Engine',
                description: 'Automatically enforce labor laws, regulations, and company policies across all scheduling decisions.',
              },
              {
                title: 'Integration Hub',
                description: 'Seamless connectivity with your existing HR systems, payroll platforms, and communication tools.',
              },
              {
                title: 'Advanced Analytics',
                description: 'Deep insights into labor costs, productivity metrics, team efficiency, and workforce trends.',
              },
              {
                title: 'White-Label Ready',
                description: 'Deploy as your own platform or integrate into existing solutions with full customization options.',
              },
            ].map((feature, i) => (
              <div key={i} className="space-y-4 p-6 rounded-lg glass-premium hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-medium leading-relaxed">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="absolute top-0 right-0 w-96 h-96 blur-3xl -z-10" style={{background: 'radial-gradient(circle, rgba(51, 153, 255, 0.12) 0%, transparent 70%)'}}></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="line-separator"></div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Impact</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-light">
                  Measurable outcomes
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  { metric: '40%', label: 'Reduction in scheduling time' },
                  { metric: '25%', label: 'Lower labor costs on average' },
                  { metric: '95%', label: 'Employee satisfaction rate' },
                ].map((item, i) => (
                  <div key={i} className="border-l premium-border pl-6 py-2">
                    <div className="text-4xl font-light text-accent mb-1">{item.metric}</div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 pt-4">
                {[
                  'SOC 2 Type II certified',
                  'Enterprise-grade security',
                  'Dedicated support team',
                  '99.9% uptime SLA',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-12 h-full flex items-center justify-center glass-premium">
              <div className="text-center space-y-4">
                <div className="text-muted-foreground text-sm uppercase tracking-widest">Enterprise Dashboard</div>
                <div className="w-48 h-32 mx-auto bg-gradient-to-b from-accent/30 via-accent/10 to-transparent rounded blur-sm"></div>
                <div className="text-xs text-muted-foreground/50 pt-4">Advanced visualization & analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 blur-3xl -z-10" style={{background: 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(51, 153, 255, 0.1) 0%, transparent 60%)'}}></div>
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="line-separator"></div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Security & Compliance</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light">
              Enterprise security you can trust
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Data Protection', desc: 'End-to-end encryption with industry-leading security protocols' },
              { title: 'Compliance', desc: 'HIPAA, GDPR, SOC 2 Type II, and more certifications' },
              { title: 'Uptime', desc: '99.9% SLA with multi-region redundancy and disaster recovery' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-8 space-y-4 glass-premium hover:border-accent/40 transition-all duration-300">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="absolute inset-0 subtle-grid -z-10"></div>
        <div className="absolute -top-64 right-1/4 w-96 h-96 blur-3xl -z-10" style={{background: 'radial-gradient(circle, rgba(51, 153, 255, 0.15) 0%, transparent 70%)'}}></div>
        <div className="absolute -bottom-64 left-1/4 w-96 h-96 blur-3xl -z-10" style={{background: 'radial-gradient(circle, rgba(51, 153, 255, 0.1) 0%, transparent 70%)'}}></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl lg:text-6xl font-light">
            Transform your workforce
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join enterprise teams using ShiftSync to unlock the full potential of their workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-accent text-background rounded hover:bg-accent/90 transition-all duration-200 font-medium">
              Start Your Trial
            </button>
            <button className="px-8 py-3 premium-border rounded hover:bg-muted/40 transition-all duration-200 font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 lg:px-8 border-t premium-border overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest">Legal</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Cookies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-6 uppercase tracking-widest">Connect</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-200">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t premium-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="text-lg font-light">ShiftSync</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase">AI</div>
            </div>
            <p className="text-sm text-muted-foreground">&copy; 2024 ShiftSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
