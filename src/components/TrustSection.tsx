import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
  Globe
} from 'lucide-react';
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

const TrustSection: React.FC = () => {
  // Sample data - can be replaced with real data
  const customerLogos = [
    { name: 'TechCorp', logo: '/logos/techcorp.svg', industry: 'Technology' },
    { name: 'FinanceFlow', logo: '/logos/financeflow.svg', industry: 'Finance' },
    { name: 'HealthPlus', logo: '/logos/healthplus.svg', industry: 'Healthcare' },
    { name: 'EduLearn', logo: '/logos/edulearn.svg', industry: 'Education' },
    { name: 'RetailMax', logo: '/logos/retailmax.svg', industry: 'Retail' },
    { name: 'StartupX', logo: '/logos/startupx.svg', industry: 'Startups' }
  ];

  const caseStudies = [
    {
      company: 'TechFlow Inc.',
      industry: 'SaaS Technology',
      metrics: [
        { before: '2 weeks', after: '2 days', improvement: '85% faster' },
        { before: '$50k', after: '$8k', improvement: '84% cost reduction' },
        { before: '5 engineers', after: '1 engineer', improvement: '80% less resources' }
      ],
      challenge: 'Manual deployment processes causing delays and errors in production releases',
      solution: 'Implemented FlowSync automated CI/CD pipeline with rollback capabilities and real-time monitoring',
      testimonial: {
        name: 'Sarah Chen',
        role: 'VP of Engineering',
        content: 'FlowSync transformed our deployment process completely. What used to take weeks now takes hours, and our team can focus on building features instead of managing deployments.'
      }
    },
    {
      company: 'FinanceFirst',
      industry: 'Financial Services',
      metrics: [
        { before: '99.5%', after: '99.99%', improvement: '99.9% uptime' },
        { before: '10 min', after: '30 sec', improvement: '95% faster recovery' },
        { before: '50+ alerts', after: '5 smart alerts', improvement: '90% noise reduction' }
      ],
      challenge: 'Complex compliance requirements and need for zero-downtime deployments in financial services',
      solution: 'Deployed FlowSync with compliance templates and automated security scanning integrated into the pipeline',
      testimonial: {
        name: 'Marcus Rodriguez',
        role: 'CTO',
        content: 'The compliance features in FlowSync are game-changing for financial services. We passed our SOC 2 audit in record time with zero findings.'
      }
    }
  ];

  const securityBadges = [
    { name: 'SOC 2 Type II', icon: 'shield', description: 'Security compliance', verified: true },
    { name: 'ISO 27001', icon: 'shield', description: 'Information security', verified: true },
    { name: 'GDPR Compliant', icon: 'shield', description: 'Data protection', verified: true },
    { name: 'HIPAA Ready', icon: 'shield', description: 'Healthcare data', verified: true }
  ];

  const reviewStats = [
    { platform: 'G2', rating: 4.8, reviews: 1247, icon: '/icons/g2.svg' },
    { platform: 'Capterra', rating: 4.9, reviews: 892, icon: '/icons/capterra.svg' },
    { platform: 'TrustRadius', rating: 4.7, reviews: 563, icon: '/icons/trustradius.svg' }
  ];

  const usageStats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="w-6 h-6 text-white" /> },
    { label: 'Deployments', value: '2.5M+', icon: <TrendingUp className="w-6 h-6 text-white" /> },
    { label: 'Uptime', value: '99.9%', icon: <Star className="w-6 h-6 text-white" /> },
    { label: 'Countries', value: '45+', icon: <Globe className="w-6 h-6 text-white" /> }
  ];

  const integrations = [
    { name: 'AWS', logo: '/integrations/aws.svg', category: 'Cloud' },
    { name: 'Azure', logo: '/integrations/azure.svg', category: 'Cloud' },
    { name: 'GCP', logo: '/integrations/gcp.svg', category: 'Cloud' },
    { name: 'GitHub', logo: '/integrations/github.svg', category: 'Development' },
    { name: 'GitLab', logo: '/integrations/gitlab.svg', category: 'Development' },
    { name: 'Bitbucket', logo: '/integrations/bitbucket.svg', category: 'Development' },
    { name: 'Docker', logo: '/integrations/docker.svg', category: 'Container' },
    { name: 'Kubernetes', logo: '/integrations/kubernetes.svg', category: 'Container' },
    { name: 'Terraform', logo: '/integrations/terraform.svg', category: 'Infrastructure' },
    { name: 'Jenkins', logo: '/integrations/jenkins.svg', category: 'CI/CD' },
    { name: 'CircleCI', logo: '/integrations/circleci.svg', category: 'CI/CD' },
    { name: 'Slack', logo: '/integrations/slack.svg', category: 'Communication' }
  ];

  const awards = [
    { name: 'Best DevOps Tool 2024', issuer: 'DevOps Awards', year: '2024', icon: <Award className="w-6 h-6 text-white" /> },
    { name: 'Top 50 Fastest Growing', issuer: 'TechCrunch', year: '2024', icon: <TrendingUp className="w-6 h-6 text-white" /> },
    { name: 'Innovation Award', issuer: 'G2', year: '2023', icon: <Zap className="w-6 h-6 text-white" /> },
    { name: 'Customer Choice', issuer: 'Capterra', year: '2023', icon: <Star className="w-6 h-6 text-white" /> }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}industry leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of teams who rely on FlowSync for their mission-critical deployments
          </p>
        </motion.div>

        {/* Customer Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Powering the world's best teams</h3>
          <CustomerLogos logos={customerLogos} variant="marquee" />
        </div>

        {/* Usage Statistics */}
        <div className="mb-20">
          <UsageStatistics stats={usageStats} />
        </div>

        {/* Security Badges */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Enterprise-grade security</h3>
            <p className="text-gray-300">Your data is safe with us. Industry-leading security and compliance standards.</p>
          </motion.div>
          <SecurityBadges badges={securityBadges} />
        </div>

        {/* Review Ratings */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Top-rated by users</h3>
            <p className="text-gray-300">Consistently rated as the best deployment platform across review sites</p>
          </motion.div>
          <ReviewRatings reviews={reviewStats} />
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Proven results</h3>
            <p className="text-gray-300">Real companies, real results. See how teams transformed their deployment process</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CaseStudyCard {...study} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Works with your stack</h3>
            <p className="text-gray-300">Seamless integrations with 100+ tools and platforms</p>
          </motion.div>
          <IntegrationLogos integrations={integrations} />
        </div>

        {/* Awards and Certifications */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Recognized excellence</h3>
            <p className="text-gray-300">Industry recognition for innovation and customer satisfaction</p>
          </motion.div>
          <AwardsCertifications awards={awards} />
        </div>

        {/* Trust Badges Row */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <TrustBadge type="security" title="SOC 2 Type II" subtitle="Certified" />
            <TrustBadge type="compliance" title="ISO 27001" subtitle="Compliant" />
            <TrustBadge type="award" title="Best DevOps Tool 2024" subtitle="DevOps Awards" />
            <TrustBadge type="rating" title="4.8/5" subtitle="G2 Rating" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;