import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Tag, Clock, Shield, Users, Zap, Book, LifeBuoy } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  views: number;
  helpful: number;
}

const faqData: FAQItem[] = [
  {
    id: 'what-is-flowsync',
    question: "What is FlowSync and how does it work?",
    answer: "FlowSync is a modern CI/CD platform that automates your software deployment pipeline. It connects to your Git repositories, runs automated tests, builds your application, and deploys it to your chosen cloud provider. Simply connect your GitHub/GitLab account, configure your build settings, and every push to your repository triggers a new deployment automatically.",
    category: "Getting Started",
    tags: ["overview", "basics", "introduction"],
    views: 15420,
    helpful: 892
  },
  {
    id: 'pricing-plans',
    question: "How much does FlowSync cost?",
    answer: "FlowSync offers four pricing tiers: Starter (Free forever with 1,000 deployments/month), Pro ($39/month for 50,000 deployments), Business ($89/month for enterprise features), and Enterprise (custom pricing). All paid plans include a 30-day money-back guarantee and 20% discount when billed annually. Non-profits and educational institutions get 50% off all paid plans.",
    category: "Pricing & Billing",
    tags: ["pricing", "cost", "plans"],
    views: 12890,
    helpful: 765
  },
  {
    id: 'supported-platforms',
    question: "Which platforms and technologies does FlowSync support?",
    answer: "FlowSync supports virtually any platform that can run in a container or on a server. This includes Node.js, Python, Ruby, Go, Java, .NET, PHP, and more. We integrate with AWS, Google Cloud, Azure, DigitalOcean, and any server via SSH. Framework-specific optimizations are available for Next.js, Nuxt.js, Gatsby, React, Vue, Angular, and static site generators.",
    category: "Technical",
    tags: ["platforms", "frameworks", "integrations"],
    views: 9876,
    helpful: 543
  },
  {
    id: 'security-measures',
    question: "How secure is FlowSync?",
    answer: "Security is our top priority. FlowSync is SOC 2 Type II certified, GDPR compliant, and uses end-to-end encryption. We store your source code encrypted at rest, use isolated build environments, and never store your deployment secrets. All team members can use SSO/SAML, and we offer audit logs for enterprise customers. Regular security audits and penetration testing ensure ongoing protection.",
    category: "Security",
    tags: ["security", "compliance", "encryption"],
    views: 7654,
    helpful: 432
  },
  {
    id: 'deployment-time',
    question: "How long do deployments take?",
    answer: "Typical deployments complete in 2-3 minutes for most applications. Build times depend on your project size and complexity. We use intelligent caching to speed up subsequent builds, often reducing deployment time to under 30 seconds for unchanged dependencies. Enterprise customers get priority build queues and dedicated infrastructure for even faster deployments.",
    category: "Performance",
    tags: ["speed", "build-time", "performance"],
    views: 6543,
    helpful: 321
  },
  {
    id: 'team-collaboration',
    question: "Can I collaborate with my team on FlowSync?",
    answer: "Absolutely! All paid plans include team collaboration features. You can invite unlimited team members, assign different roles (Admin, Developer, Viewer), and manage permissions per project. Use our built-in commenting system for code reviews, share deployment previews, and get notifications in Slack or Discord. Enterprise customers get advanced team management with SSO/SAML integration.",
    category: "Teams",
    tags: ["collaboration", "teams", "permissions"],
    views: 5432,
    helpful: 298
  },
  {
    id: 'rollback-features',
    question: "Can I rollback deployments if something goes wrong?",
    answer: "Yes, instant rollback is available on all paid plans. You can rollback to any previous deployment with a single click or API call. We maintain a complete deployment history and provide visual diffs between versions. Set up automatic rollback triggers based on health checks or custom metrics. Pro plans include 30-day rollback history, Business plans include 90 days, and Enterprise plans include unlimited history.",
    category: "Features",
    tags: ["rollback", "revert", "safety"],
    views: 4321,
    helpful: 234
  },
  {
    id: 'custom-domains',
    question: "Can I use my own domain name?",
    answer: "Yes, custom domains are supported on all paid plans. Simply add your domain in the project settings, update your DNS records, and we'll automatically provision SSL certificates via Let's Encrypt or bring your own certificates. We support wildcard domains, multiple domains per project, and automatic redirects from www to non-www or vice versa.",
    category: "Domains",
    tags: ["custom-domain", "ssl", "dns"],
    views: 3456,
    helpful: 198
  },
  {
    id: 'api-access',
    question: "Does FlowSync have an API?",
    answer: "Yes, we offer a comprehensive REST API and GraphQL endpoint for all plans. Use the API to trigger deployments, manage projects, retrieve analytics, and integrate with your existing tools. Rate limits are generous: 1,000 requests/hour on Pro, 10,000/hour on Business, and unlimited on Enterprise. Full API documentation and SDKs are available in multiple programming languages.",
    category: "API & Integration",
    tags: ["api", "rest", "graphql", "integration"],
    views: 3210,
    helpful: 176
  },
  {
    id: 'support-options',
    question: "What support options are available?",
    answer: "All users get access to our comprehensive documentation and community forum. Pro users get email support with 24-hour response times. Business users get priority email and chat support with 4-hour response times. Enterprise customers get 24/7 phone support, dedicated account managers, and custom SLAs. We also offer professional services for complex migrations and custom integrations.",
    category: "Support",
    tags: ["support", "help", "contact"],
    views: 2987,
    helpful: 165
  },
  {
    id: 'migration-assistance',
    question: "Can you help migrate from another platform?",
    answer: "Yes, we offer free migration assistance for all new customers. Our team will help you migrate from platforms like Heroku, Netlify, Vercel, or custom setups. We provide migration guides, one-on-one consultations, and can even handle the migration for you on Business and Enterprise plans. Most migrations complete within 1-2 days with zero downtime.",
    category: "Migration",
    tags: ["migration", "import", "transfer"],
    views: 2345,
    helpful: 143
  },
  {
    id: 'environment-variables',
    question: "How do environment variables and secrets work?",
    answer: "Environment variables are encrypted at rest and in transit. Set them through our dashboard or API, and they're automatically injected during build and runtime. Secrets are masked in logs and never exposed to team members without proper permissions. Use different values for preview/production environments, and rotate secrets anytime. Enterprise customers get advanced secret management with audit logs and approval workflows.",
    category: "Configuration",
    tags: ["env-vars", "secrets", "configuration"],
    views: 1987,
    helpful: 121
  }
];

const categories = [
  { name: "All", icon: Book, count: faqData.length },
  { name: "Getting Started", icon: Zap, count: faqData.filter(f => f.category === "Getting Started").length },
  { name: "Pricing & Billing", icon: Clock, count: faqData.filter(f => f.category === "Pricing & Billing").length },
  { name: "Technical", icon: Shield, count: faqData.filter(f => f.category === "Technical").length },
  { name: "Security", icon: Shield, count: faqData.filter(f => f.category === "Security").length },
  { name: "Teams", icon: Users, count: faqData.filter(f => f.category === "Teams").length },
  { name: "Support", icon: LifeBuoy, count: faqData.filter(f => f.category === "Support").length }
];

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleItem = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const markHelpful = (id: string) => {
    // In a real app, this would update the backend
    console.log('Marked as helpful:', id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about FlowSync. Can't find what you're looking for? 
            <a href="#contact" className="text-purple-400 hover:text-purple-300">Contact our team</a>.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions... (e.g., 'deployment', 'pricing', 'security')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              <span className="text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Summary */}
        <AnimatePresence>
          {(searchQuery || selectedCategory !== "All") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mb-6"
            >
              <p className="text-gray-300">
                Found {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{faq.question}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Tag className="w-3 h-3" />
                      <span>{faq.category}</span>
                      <span className="text-gray-500">•</span>
                      <span>{faq.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedItems.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedItems.has(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700"
                    >
                      <div className="px-6 py-4">
                        <p className="text-gray-300 mb-4">{faq.answer}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <button
                            onClick={() => markHelpful(faq.id)}
                            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
                          >
                            👍 Helpful ({faq.helpful})
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        <AnimatePresence>
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No questions found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search or browse all questions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-purple-400 hover:text-purple-300"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is here to help. Get in touch with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Support
            </button>
            <button className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
            >
              Join Community
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;