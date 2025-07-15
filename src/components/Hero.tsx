import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = "/signup?email=" + encodeURIComponent(email);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>4.9/5 from 2,847 reviews</span>
              </div>
              <div className="h-4 w-px bg-gray-600"></div>
              <span className="text-sm text-gray-400">14-day free trial</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ship projects
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                3x faster
              </span>
              without daily standups
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Replace 5 tools with 1 AI-powered workspace that predicts delays before they happen. 
              Built for remote teams who need to ship on time, every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">67%</div>
                <div className="text-sm text-gray-400">Faster delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">42%</div>
                <div className="text-sm text-gray-400">Fewer delays</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8.4hrs</div>
                <div className="text-sm text-gray-400">Saved weekly</div>
              </div>
            </div>

            {/* CTA Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </form>

            {/* Additional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Play className="w-5 h-5" />
                Watch 2-min demo
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Calculate your ROI
              </button>
            </div>
          </motion.div>

          {/* Visual/Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mock Dashboard */}
            <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400">Live dashboard</div>
              </div>
              
              {/* Progress bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Project Alpha</span>
                    <span className="text-green-400">On track</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Client Website</span>
                    <span className="text-yellow-400">Risk: 2 days</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Mobile App</span>
                    <span className="text-purple-400">AI predicted delay</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Insights</span>
              </div>
              <div className="text-xs mt-1">3 tasks at risk</div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-600 rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">Team synced</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">12 members online</div>
            </motion.div>
          </motion.div>

          {/* Social Proof Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400">Trusted by teams at</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-gray-400">TechCorp</span>
              <span className="text-gray-400">StartupX</span>
              <span className="text-gray-400">DigitalFlow</span>
              <span className="text-gray-400">Agency360</span>
              <span className="text-gray-400">CloudSync</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;