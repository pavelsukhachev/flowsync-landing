import React from 'react';
import { motion } from 'framer-motion';

const IntegrationLogos: React.FC = () => {
  const integrations = [
    {
      name: 'AWS',
      category: 'Cloud',
      color: 'bg-orange-500',
      textColor: 'text-white'
    },
    {
      name: 'Azure',
      category: 'Cloud',
      color: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      name: 'GCP',
      category: 'Cloud',
      color: 'bg-red-500',
      textColor: 'text-white'
    },
    {
      name: 'GitHub',
      category: 'Development',
      color: 'bg-gray-800',
      textColor: 'text-white'
    },
    {
      name: 'GitLab',
      category: 'Development',
      color: 'bg-orange-600',
      textColor: 'text-white'
    },
    {
      name: 'Docker',
      category: 'Container',
      color: 'bg-blue-400',
      textColor: 'text-white'
    },
    {
      name: 'Kubernetes',
      category: 'Container',
      color: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      name: 'Terraform',
      category: 'Infrastructure',
      color: 'bg-purple-500',
      textColor: 'text-white'
    },
    {
      name: 'Jenkins',
      category: 'CI/CD',
      color: 'bg-red-400',
      textColor: 'text-white'
    },
    {
      name: 'CircleCI',
      category: 'CI/CD',
      color: 'bg-green-500',
      textColor: 'text-white'
    },
    {
      name: 'Slack',
      category: 'Communication',
      color: 'bg-purple-600',
      textColor: 'text-white'
    }
  ];

  const categories = [...new Set(integrations.map(i => i.category))];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Works with your stack
          </h2>
          <p className="text-xl text-gray-300">
            Seamless integrations with 100+ tools and platforms
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {integrations
                  .filter(i => i.category === category)
                  .map((integration, index) => (
                    <motion.div
                      key={integration.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600"
                    >
                      <div className={`w-3 h-3 rounded ${integration.color}`} />
                      <span className="text-white font-medium">{integration.name}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationLogos;