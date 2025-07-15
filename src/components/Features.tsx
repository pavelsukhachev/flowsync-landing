import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu, Layers, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure that scales with your needs.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to keep your data safe and private at all times.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge locations in 100+ cities for ultra-low latency everywhere.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI to automate workflows and make smarter decisions faster.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 500+ popular tools and services with our extensive API and SDK support.",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    icon: Rocket,
    title: "Instant Deployment",
    description: "Launch your projects in seconds with one-click deployment and automatic scaling.",
    gradient: "from-red-400 to-pink-500"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> succeed</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Packed with powerful features that grow with your business. From startups to enterprises, 
            we've got you covered.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore all features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;