import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Building2, Users, TrendingUp, Shield, Award, CheckCircle } from 'lucide-react';

// Individual trust widgets that can be placed anywhere

interface FloatingTrustWidgetProps {
  position?: 'top-right' | 'bottom-left' | 'bottom-right';
  autoHide?: boolean;
}

export const FloatingTrustWidget: React.FC<FloatingTrustWidgetProps> = ({
  position = 'bottom-right',
  autoHide = true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  if (autoHide && !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className={`fixed ${positionClasses[position]} z-50 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 max-w-xs`}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">2,847 deployments today</div>
          <div className="text-xs text-gray-400">99.9% uptime this month</div>
        </div>
      </div>
    </motion.div>
  );
};

interface LiveCounterProps {
  type: 'deployments' | 'users' | 'uptime';
  className?: string;
}

export const LiveCounter: React.FC<LiveCounterProps> = ({ type, className = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const baseValues = {
      deployments: 2847,
      users: 48732,
      uptime: 99.9
    };

    const increments = {
      deployments: 3,
      users: 12,
      uptime: 0.01
    };

    setCount(baseValues[type]);

    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + increments[type];
        if (type === 'uptime') {
          return Math.min(newCount, 99.99);
        }
        return newCount;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [type]);

  const getLabel = () => {
    switch (type) {
      case 'deployments': return 'Deployments today';
      case 'users': return 'Active users';
      case 'uptime': return 'Uptime this month';
    }
  };

  const formatCount = () => {
    if (type === 'uptime') return `${count.toFixed(2)}%`;
    if (count > 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 ${className}`}
    >
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-sm font-semibold text-white">{formatCount()}</span>
      <span className="text-xs text-gray-400">{getLabel()}</span>
    </motion.div>
  );
};

interface MiniTestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  compact?: boolean;
}

export const MiniTestimonial: React.FC<MiniTestimonialProps> = ({
  name,
  role,
  content,
  avatar,
  compact = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 ${compact ? 'p-4' : 'p-6'}`}
    >
      <div className="flex items-start gap-3">
        {!compact && avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <Quote className="w-4 h-4 text-purple-400 mb-2" />
          <p className={`text-gray-300 ${compact ? 'text-sm' : 'text-base'} mb-3`}>
            "{content}"
          </p>
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold text-white">{name}</div>
            <div className="text-xs text-gray-400">•</div>
            <div className="text-xs text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface SocialProofBarProps {
  variant?: 'horizontal' | 'vertical';
  items: Array<{
    icon: React.ReactNode;
    text: string;
    highlight?: string;
  }>;
}

export const SocialProofBar: React.FC<SocialProofBarProps> = ({
  variant = 'horizontal',
  items
}) => {
  const containerClasses = variant === 'horizontal'
    ? 'flex items-center justify-center gap-6 flex-wrap'
    : 'flex flex-col items-center gap-4';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`${containerClasses} py-6`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          {item.icon}
          <span>{item.text}</span>
          {item.highlight && (
            <span className="text-purple-400 font-semibold">{item.highlight}</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

interface TrustIndicatorProps {
  type: 'security' | 'compliance' | 'performance' | 'support';
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const TrustIndicator: React.FC<TrustIndicatorProps> = ({
  type,
  value,
  label,
  icon
}) => {
  const defaultIcons = {
    security: <Shield className="w-5 h-5" />,
    compliance: <CheckCircle className="w-5 h-5" />,
    performance: <TrendingUp className="w-5 h-5" />,
    support: <Users className="w-5 h-5" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-600/50"
    >
      <div className="text-purple-400">
        {icon || defaultIcons[type]}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{value}</div>
        <div className="text-xs text-gray-400">{label}</div>
      </div>
    </motion.div>
  );
};

interface RotatingTestimonialsProps {
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    company: string;
    avatar?: string;
  }>;
  interval?: number;
}

export const RotatingTestimonials: React.FC<RotatingTestimonialsProps> = ({
  testimonials,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, testimonials.length]);

  return (
    <div className="relative max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
        >
          <div className="flex items-start gap-4">
            {testimonials[currentIndex].avatar && (
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <Quote className="w-4 h-4 text-purple-400 mb-2" />
              <p className="text-gray-300 text-sm mb-3">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <div className="font-semibold text-white text-sm">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-xs text-gray-400">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Quick trust badges for placement in headers/footers
export const QuickTrustBadges: React.FC = () => {
  const badges = [
    { icon: <Star className="w-4 h-4" />, text: '4.8/5 on G2' },
    { icon: <Users className="w-4 h-4" />, text: '50K+ users' },
    { icon: <Shield className="w-4 h-4" />, text: 'SOC 2 Certified' },
    { icon: <CheckCircle className="w-4 h-4" />, text: '99.9% uptime' }
  ];

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-1 text-xs text-gray-400"
        >
          {badge.icon}
          <span>{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
};