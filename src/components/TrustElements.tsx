import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp, Building2, CheckCircle, Star } from 'lucide-react';

export interface TrustBadgeProps {
  type: 'security' | 'compliance' | 'award' | 'rating';
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ type, title, subtitle, icon }) => {
  const getIcon = () => {
    switch (type) {
      case 'security':
        return <Shield className="w-5 h-5" />;
      case 'compliance':
        return <CheckCircle className="w-5 h-5" />;
      case 'award':
        return <Award className="w-5 h-5" />;
      case 'rating':
        return <Star className="w-5 h-5" />;
      default:
        return icon;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
    >
      <div className="text-purple-400">{getIcon()}</div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle && <div className="text-xs text-gray-300">{subtitle}</div>}
      </div>
    </motion.div>
  );
};

export interface CustomerLogo {
  name: string;
  logo: string;
  industry?: string;
}

interface CustomerLogosProps {
  logos: CustomerLogo[];
  variant?: 'marquee' | 'grid';
}

export const CustomerLogos: React.FC<CustomerLogosProps> = ({ logos, variant = 'marquee' }) => {
  if (variant === 'marquee') {
    return (
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 mx-8"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex justify-center"
        >
          <img
            src={logo.logo}
            alt={logo.name}
            className="h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};

export interface CaseStudyProps {
  company: string;
  industry: string;
  metrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
  challenge: string;
  solution: string;
  testimonial: {
    name: string;
    role: string;
    content: string;
  };
}

export const CaseStudyCard: React.FC<CaseStudyProps> = ({
  company,
  industry,
  metrics,
  challenge,
  solution,
  testimonial
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{company}</h3>
          <p className="text-purple-400">{industry}</p>
        </div>
        <Building2 className="w-8 h-8 text-purple-400" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-white mb-1">{metric.after}</div>
            <div className="text-sm text-gray-400 mb-2">vs {metric.before}</div>
            <div className="text-sm font-semibold text-green-400">{metric.improvement}</div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
          <p className="text-gray-300">{challenge}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
          <p className="text-gray-300">{solution}</p>
        </div>
      </div>

      <div className="border-t border-slate-700 pt-6">
        <blockquote className="text-gray-300 italic mb-4">
          "{testimonial.content}"
        </blockquote>
        <div className="text-sm">
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
};

export interface SecurityBadge {
  name: string;
  icon: string;
  description: string;
  verified: boolean;
}

interface SecurityBadgesProps {
  badges: SecurityBadge[];
}

export const SecurityBadges: React.FC<SecurityBadgesProps> = ({ badges }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-sm font-semibold text-white mb-1">{badge.name}</h4>
          <p className="text-xs text-gray-400">{badge.description}</p>
          {badge.verified && (
            <div className="flex items-center justify-center mt-2 text-green-400">
              <CheckCircle className="w-3 h-3 mr-1" />
              <span className="text-xs">Verified</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export interface ReviewStats {
  platform: string;
  rating: number;
  reviews: number;
  icon: string;
}

interface ReviewRatingsProps {
  reviews: ReviewStats[];
}

export const ReviewRatings: React.FC<ReviewRatingsProps> = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <motion.div
          key={review.platform}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
        >
          <img src={review.icon} alt={review.platform} className="w-12 h-12 mx-auto mb-3" />
          <div className="flex justify-center items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
              />
            ))}
            <span className="text-sm font-semibold text-white ml-2">{review.rating}</span>
          </div>
          <div className="text-sm text-gray-400">{review.reviews.toLocaleString()} reviews</div>
        </motion.div>
      ))}
    </div>
  );
};

export interface UsageStats {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface UsageStatisticsProps {
  stats: UsageStats[];
}

export const UsageStatistics: React.FC<UsageStatisticsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              {stat.icon}
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export interface Integration {
  name: string;
  logo: string;
  category: string;
}

interface IntegrationLogosProps {
  integrations: Integration[];
}

export const IntegrationLogos: React.FC<IntegrationLogosProps> = ({ integrations }) => {
  const categories = [...new Set(integrations.map(i => i.category))];

  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category}>
          <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {integrations
              .filter(i => i.category === category)
              .map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    title={integration.name}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export interface Award {
  name: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
}

interface AwardsCertificationsProps {
  awards: Award[];
}

export const AwardsCertifications: React.FC<AwardsCertificationsProps> = ({ awards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, index) => (
        <motion.div
          key={award.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              {award.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">{award.name}</h4>
              <p className="text-sm text-gray-400 mb-1">{award.issuer}</p>
              <p className="text-xs text-purple-400">{award.year}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};