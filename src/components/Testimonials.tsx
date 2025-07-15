import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AvatarSVG from './AvatarSVG';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO @ TechFlow",
    content: "This platform transformed how we build products. The speed and reliability are unmatched. Our team productivity increased by 300% in just 3 months.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder @ StartupX",
    content: "I was able to launch my MVP in 2 weeks instead of 6 months. The AI-powered features are incredible - it's like having a senior developer on demand.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Product Lead @ InnovateCorp",
    content: "The scalability is phenomenal. We went from 100 to 100,000 users overnight without any issues. Customer support is also incredibly responsive.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else if (event.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> creators</span>
            worldwide
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real users are saying about their experience.
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Customer testimonials carousel"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700"
            >
              <Quote className="w-8 h-8 text-purple-400 mb-6" />
              
              <div className="flex items-center mb-4" aria-label={`Rating: ${testimonials[currentIndex].rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                ))}
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center gap-4">
                <AvatarSVG 
                  name={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-400 w-8' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;