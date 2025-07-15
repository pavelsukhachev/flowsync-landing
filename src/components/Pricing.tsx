import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

interface PricingTier {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: {
      monthly: 0,
      annually: 0
    },
    description: "Perfect for solo developers and small projects",
    features: [
      "Up to 3 projects",
      "1,000 deployments/month",
      "Basic analytics",
      "Community support",
      "GitHub integration",
      "Static sites only"
    ],
    ctaText: "Get Started Free",
    ctaLink: "/signup?plan=starter"
  },
  {
    name: "Pro",
    price: {
      monthly: 39,
      annually: 31
    },
    description: "Ideal for growing teams and production apps",
    features: [
      "Unlimited projects",
      "50,000 deployments/month",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom domains",
      "SSL certificates",
      "Team collaboration",
      "Rollback capabilities"
    ],
    popular: true,
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=pro",
    badge: "Most Popular"
  },
  {
    name: "Business",
    price: {
      monthly: 89,
      annually: 71
    },
    description: "For teams that need enterprise-grade features",
    features: [
      "Everything in Pro",
      "500,000 deployments/month",
      "Advanced security",
      "SSO & SAML",
      "Audit logs",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Advanced monitoring",
      "Compliance tools"
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=business"
  },
  {
    name: "Enterprise",
    price: {
      monthly: 299,
      annually: 239
    },
    description: "Unlimited scale for large organizations",
    features: [
      "Everything in Business",
      "Unlimited deployments",
      "White-label options",
      "Custom infrastructure",
      "24/7 phone support",
      "Dedicated account manager",
      "Custom contracts",
      "On-premise deployment",
      "Advanced security",
      "SOC 2 compliance"
    ],
    ctaText: "Contact Sales",
    ctaLink: "/enterprise-contact",
    badge: "Custom"
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const calculateSavings = (monthlyPrice: number, annualPrice: number) => {
    const savings = ((monthlyPrice * 12) - (annualPrice * 12)) / (monthlyPrice * 12) * 100;
    return Math.round(savings);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team's needs. All plans include a 30-day money-back guarantee.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annually' ? 'text-white' : 'text-gray-400'}`}>
              Annually
            </span>
            <span className="text-sm text-green-400 font-semibold">
              Save up to 20%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredTier(tier.name)}
              onHoverEnd={() => setHoveredTier(null)}
              className={`relative bg-slate-800 rounded-xl border-2 transition-all duration-300 ${
                tier.popular
                  ? 'border-purple-500 shadow-purple-500/20 shadow-2xl transform scale-105'
                  : 'border-slate-700 hover:border-purple-500/50'
              } ${
                hoveredTier === tier.name && !tier.popular ? 'transform scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? tier.price.monthly : tier.price.annually}
                    </span>
                    <span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </div>
                  
                  {billingCycle === 'annually' && tier.price.monthly > 0 && (
                    <div className="text-sm text-green-400 mt-1">
                      Save ${(tier.price.monthly - tier.price.annually) * 12}/year
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need something custom?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We offer custom enterprise solutions with unlimited scale, white-label options, 
            and dedicated support. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Contact Sales
            </button>
            <button className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-green-400">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">30-day money-back guarantee • No questions asked</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;