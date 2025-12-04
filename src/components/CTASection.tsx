'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    'Setup Fees',
    '24/7 Support',
    'Free Training',
  ];

  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-br from-teal-600 to-teal-700 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className={`text-4xl lg:text-5xl font-bold text-white mb-4 transform transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? '0ms' : '0ms',
          }}
        >
          Ready to Transform Your Business?
        </h2>
        <p
          className={`text-lg text-white/90 mb-8 transform transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? '100ms' : '0ms',
          }}
        >
          Join thousands of MSMEs already growing their businesses on our
          platform
        </p>

        
        <div
          className={`mb-8 transform transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? '200ms' : '0ms',
          }}
        >
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-500 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Start Your Transformation →
          </Link>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center gap-8 pt-8 border-t border-white/20 transform transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? '300ms' : '0ms',
          }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <span className="text-green-300 text-xl font-bold">✓</span>
              <span className="text-white font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
