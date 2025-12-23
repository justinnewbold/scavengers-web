'use client'

import { useState } from 'react'
import { 
  Sparkles, 
  Camera, 
  MapPin, 
  QrCode, 
  Users, 
  Zap, 
  Shield, 
  DollarSign,
  Smartphone,
  ArrowRight,
  Check,
  Star,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    setEmailError('')
    setSubmitted(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-xl font-bold text-white">Scavengers</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a
                href="https://github.com/justinnewbold/scavengers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-light px-4 py-2 rounded-lg font-semibold transition"
              >
                Get the App
              </a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">Features</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">Pricing</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">How It Works</a>
              <a
                href="https://github.com/justinnewbold/scavengers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-primary hover:bg-primary-light px-4 py-2 rounded-lg font-semibold text-center"
              >
                Get the App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-primary" size={16} />
            <span className="text-sm text-gray-300">AI-Powered Scavenger Hunts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Create Epic Hunts<br />
            <span className="text-gradient">In Seconds</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            The smartest way to create and play scavenger hunts. 
            AI-powered, offline-capable, and completely free for small groups.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/justinnewbold/scavengers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              <Smartphone size={20} />
              Download App
            </a>
            <a 
              href="#how-it-works"
              className="border border-border hover:border-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition"
            >
              See How It Works
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Free</div>
              <div className="text-sm text-gray-400">Up to 15 players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">30s</div>
              <div className="text-sm text-gray-400">AI Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-gray-400">Offline Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Packed with Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to create unforgettable scavenger hunt experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="text-primary" size={32} />,
                title: 'AI Hunt Generation',
                description: 'Describe your theme and let AI create a complete hunt with challenges, points, and hints in seconds.'
              },
              {
                icon: <Camera className="text-secondary" size={32} />,
                title: 'Photo Verification',
                description: 'AI-powered photo analysis verifies challenge completion automatically. No manual checking needed.'
              },
              {
                icon: <MapPin className="text-accent" size={32} />,
                title: 'GPS Challenges',
                description: 'Create location-based challenges that verify players reached the right spot.'
              },
              {
                icon: <QrCode className="text-primary" size={32} />,
                title: 'QR Code Support',
                description: 'Generate and scan QR codes for instant challenge verification.'
              },
              {
                icon: <Users className="text-secondary" size={32} />,
                title: 'Team Play',
                description: 'Support for both individual and team-based competition modes.'
              },
              {
                icon: <Shield className="text-accent" size={32} />,
                title: 'Works Offline',
                description: 'Download hunts and play without internet. Perfect for remote locations.'
              },
            ].map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:border-primary transition">
                <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">Create your first hunt in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Describe Your Hunt',
                description: 'Tell AI about your theme, location, and preferences. Birthday party? Nature walk? Team building? We\'ve got you covered.'
              },
              {
                step: '02',
                title: 'AI Creates Challenges',
                description: 'In about 30 seconds, AI generates a complete hunt with creative challenges, point values, and helpful hints.'
              },
              {
                step: '03',
                title: 'Share & Play!',
                description: 'Invite players, start the hunt, and watch the leaderboard update in real-time as challenges are completed.'
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-bold text-surface absolute -top-4 -left-4 select-none">
                  {item.step}
                </div>
                <div className="relative glass rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Fair Pricing</h2>
            <p className="text-gray-400">No ads. Ever. We promise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="glass rounded-2xl p-8">
              <div className="text-lg font-semibold text-gray-400 mb-2">Free Forever</div>
              <div className="text-5xl font-bold mb-4">$0</div>
              <p className="text-gray-400 mb-6">Perfect for small groups and casual hunts</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Up to 15 participants per hunt',
                  'Up to 3 active hunts',
                  'AI hunt generation',
                  'All verification methods',
                  'Offline mode',
                  'Basic analytics',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-green-500" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://github.com/justinnewbold/scavengers"
                className="block w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-semibold text-center transition"
              >
                Get Started Free
              </a>
            </div>

            {/* Premium Tier */}
            <div className="glass rounded-2xl p-8 border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-lg font-semibold text-primary mb-2">Premium</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">$4.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">For serious hunt organizers and events</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited participants',
                  'Unlimited active hunts',
                  'Priority AI generation',
                  'Advanced analytics & reports',
                  'Custom branding',
                  'Team management',
                  'Export hunt data',
                  'Priority support',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-primary" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className="block w-full bg-primary hover:bg-primary-light py-3 rounded-xl font-semibold text-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
                onMouseEnter={() => setShowComingSoon(true)}
                onMouseLeave={() => setShowComingSoon(false)}
                onClick={() => setShowComingSoon(true)}
              >
                Coming Soon
              </button>
              {showComingSoon && (
                <p className="text-center text-sm text-gray-400 mt-2 animate-pulse">
                  Premium subscriptions launching soon!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your First Hunt?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of people creating unforgettable scavenger hunt experiences.
          </p>
          
          {submitted ? (
            <div className="bg-green-500/20 border border-green-500 rounded-xl p-6 inline-block">
              <Check className="inline mr-2" />
              Thanks! We'll notify you when the app launches.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError('')
                  }}
                  required
                  className={`flex-1 bg-surface border rounded-xl px-4 py-3 focus:outline-none focus:border-primary ${
                    emailError ? 'border-red-500' : 'border-border'
                  }`}
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap"
                >
                  Get Notified
                </button>
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-xl font-bold">Scavengers</span>
            </div>
            
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="https://github.com/justinnewbold/scavengers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2025 Scavengers. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
