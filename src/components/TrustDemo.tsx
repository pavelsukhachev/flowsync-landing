import React from 'react';
import {
  TrustBadge,
  CustomerLogos,
  CaseStudyCard,
  SecurityBadges,
  ReviewRatings,
  UsageStatistics,
  IntegrationLogos,
  AwardsCertifications
} from './TrustElements';
import {
  FloatingTrustWidget,
  LiveCounter,
  MiniTestimonial,
  SocialProofBar,
  TrustIndicator,
  RotatingTestimonials,
  QuickTrustBadges
} from './TrustWidgets';
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Cloud,
  Database,
  Globe,
  Lock
} from 'lucide-react';

const TrustDemo: React.FC = () => {
  // Sample data for demonstration
  const customerLogos = [
    { name: 'TechCorp', logo: '/logos/techcorp.svg' },
    { name: 'FinanceFlow', logo: '/logos/financeflow.svg' },
    { name: 'HealthPlus', logo: '/logos/healthplus.svg' },
    { name: 'EduLearn', logo: '/logos/edulearn.svg' },
    { name: 'RetailMax', logo: '/logos/retailmax.svg' },
    { name: 'StartupX', logo: '/logos/startupx.svg' }
  ];

  const caseStudies = [
    {
      company: 'TechFlow Inc.',
      industry: 'SaaS Technology',
      metrics: [
        { before: '2 weeks', after: '2 days', improvement: '85% faster' },
        { before: '$50k', after: '$8k', improvement: '84% cost reduction' }
      ],
      challenge: 'Manual deployment processes causing delays',
      solution: 'Implemented FlowSync automated CI/CD pipeline',
      testimonial: {
        name: 'Sarah Chen',
        role: 'VP of Engineering',
        content: 'FlowSync transformed our deployment process completely.'
      }
    }
  ];

  const securityBadges = [
    { name: 'SOC 2 Type II', icon: 'shield', description: 'Security compliance', verified: true },
    { name: 'ISO 27001', icon: 'shield', description: 'Information security', verified: true }
  ];

  const reviewStats = [
    { platform: 'G2', rating: 4.8, reviews: 1247, icon: '/icons/g2.svg' },
    { platform: 'Capterra', rating: 4.9, reviews: 892, icon: '/icons/capterra.svg' }
  ];

  const usageStats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="w-6 h-6 text-white" /> },
    { label: 'Deployments', value: '2.5M+', icon: <TrendingUp className="w-6 h-6 text-white" /> }
  ];

  const integrations = [
    { name: 'AWS', logo: '/integrations/aws.svg', category: 'Cloud' },
    { name: 'GitHub', logo: '/integrations/github.svg', category: 'Development' },
    { name: 'Docker', logo: '/integrations/docker.svg', category: 'Container' }
  ];

  const awards = [
    { name: 'Best DevOps Tool 2024', issuer: 'DevOps Awards', year: '2024', icon: <Award className="w-6 h-6 text-white" /> }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'FlowSync cut our deployment time by 90%. Game changer!',
      avatar: '/avatars/alex.svg'
    },
    {
      name: 'Maria Garcia',
      role: 'DevOps Lead',
      company: 'FinanceFlow',
      content: 'The best CI/CD platform we\'ve ever used. Period.',
      avatar: '/avatars/maria.svg'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'StartupX',
      content: 'From weeks to hours. That\'s the FlowSync difference.',
      avatar: '/avatars/david.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Trust & Social Proof Components Demo</h1>

        {/* Floating Widget */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">1. Floating Trust Widget</h2>
          <p className="text-gray-300 mb-4">Shows live activity in a floating widget (bottom-right)</p>
          <FloatingTrustWidget position="bottom-right" autoHide={false} />
        </div>

        {/* Live Counters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">2. Live Counters</h2>
          <div className="flex flex-wrap gap-4">
            <LiveCounter type="deployments" />
            <LiveCounter type="users" />
            <LiveCounter type="uptime" />
          </div>
        </div>

        {/* Quick Trust Badges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">3. Quick Trust Badges</h2>
          <QuickTrustBadges />
        </div>

        {/* Trust Indicators */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">4. Trust Indicators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TrustIndicator type="security" value="SOC 2" label="Certified" />
            <TrustIndicator type="performance" value="99.9%" label="Uptime" />
            <TrustIndicator type="compliance" value="GDPR" label="Compliant" />
            <TrustIndicator type="support" value="24/7" label="Support" />
          </div>
        </div>

        {/* Mini Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">5. Mini Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <MiniTestimonial
              name="Sarah Chen"
              role="CTO @ TechFlow"
              content="Cut deployment time by 90% with FlowSync. Absolutely game-changing!"
            />
            <MiniTestimonial
              name="Marcus Rodriguez"
              role="Founder @ StartupX"
              content="From idea to production in 2 days. Unbelievable speed and reliability."
              compact
            />
            <MiniTestimonial
              name="Emily Watson"
              role="DevOps Lead @ InnovateCorp"
              content="The automation features saved us 40 hours per week."
            />
          </div>
        </div>

        {/* Rotating Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">6. Rotating Testimonials</h2>
          <RotatingTestimonials testimonials={testimonials} interval={4000} />
        </div>

        {/* Social Proof Bar */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">7. Social Proof Bar</h2>
          <SocialProofBar
            items={[
              { icon: <Users className="w-4 h-4" />, text: 'Trusted by', highlight: '50,000+ developers' },
              { icon: <Star className="w-4 h-4" />, text: 'Rated', highlight: '4.8/5 stars' },
              { icon: <Shield className="w-4 h-4" />, text: '', highlight: 'SOC 2 Certified' },
              { icon: <TrendingUp className="w-4 h-4" />, text: '99.9% uptime' }
            ]}
          />
        </div>

        {/* Customer Logos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">8. Customer Logos - Marquee</h2>
          <CustomerLogos logos={customerLogos} variant="marquee" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">9. Customer Logos - Grid</h2>
          <CustomerLogos logos={customerLogos} variant="grid" />
        </div>

        {/* Usage Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">10. Usage Statistics</h2>
          <UsageStatistics stats={usageStats} />
        </div>

        {/* Security Badges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">11. Security Badges</h2>
          <SecurityBadges badges={securityBadges} />
        </div>

        {/* Review Ratings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">12. Review Ratings</h2>
          <ReviewRatings reviews={reviewStats} />
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">13. Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.company} {...study} />
            ))}
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">14. Integration Logos</h2>
          <IntegrationLogos integrations={integrations} />
        </div>

        {/* Awards and Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">15. Awards and Certifications</h2>
          <AwardsCertifications awards={awards} />
        </div>

        {/* Individual Trust Badges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">16. Individual Trust Badges</h2>
          <div className="flex flex-wrap gap-4">
            <TrustBadge type="security" title="SOC 2 Type II" subtitle="Certified" />
            <TrustBadge type="compliance" title="ISO 27001" subtitle="Compliant" />
            <TrustBadge type="award" title="Best DevOps Tool" subtitle="2024" />
            <TrustBadge type="rating" title="4.8/5" subtitle="G2 Rating" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustDemo;