'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function BusinessShowcaseSection() {
  const features = [
    {
      icon: '🎨',
      title: 'Custom Branding',
      description: 'Upload your logo and brand colors',
    },
    {
      icon: '📦',
      title: 'Product Catalog',
      description: 'Showcase your products with images and prices',
    },
    {
      icon: '💬',
      title: 'Contact Integration',
      description: 'Whatsapp, calls and social media links',
    },
  ];

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

  return (
    <section className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            See Your Business Page in Action
          </h2>
          <p className="text-lg text-gray-600">
            Preview how your business will look to customers
          </p>
        </div>

  
        <div
          className="relative rounded-3xl overflow-hidden p-8 lg:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(245,245,245,0.8) 0%, rgba(220,238,255,0.5) 100%)',
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f3f4f6" fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: isVisible ? '0ms' : '0ms',
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Professional Business Showcase
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{
                transitionDelay: isVisible ? '100ms' : '0ms',
              }}
            >
              <div className="relative group">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-teal-600 px-6 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      SB
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Sample Business</h4>
                      <p className="text-teal-100 text-sm">
                        Fashion & Accessories
                      </p>
                    </div>
                  </div>
                  <div className="relative h-40 bg-gray-100 overflow-hidden">
                    <Image
                      src="/images/tshirt.png"
                      alt="Sample business products"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          45
                        </div>
                        <div className="text-sm text-gray-600">Products</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          4.9<span className="text-lg">★</span>
                        </div>
                        <div className="text-sm text-gray-600">Reviews</div>
                      </div>
                    </div>
                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                      Contact Business
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full opacity-40 blur-3xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full opacity-40 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
