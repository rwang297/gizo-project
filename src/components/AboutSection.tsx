'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`rounded-3xl overflow-hidden transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
            }}
          >
            <div className="relative h-96 lg:h-[350px] rounded-3xl overflow-hidden border-8 border-teal-600">
              <Image
                src="/images/image1.png"
                alt="Team meeting and collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{
              transitionDelay: isVisible ? '100ms' : '0ms',
            }}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-lg">K</span>asuwan Gizo is a Nigerian digital platform built to help small, medium, and micro businesses (MSMEs) gain the online visibility they deserve. We make it easy for local entrepreneurs, service providers, and shop owners to list their products, showcase their services, and share their business details — all in one trusted space where customers can easily find and contact them.
              </p>

              <p>
                Our mission is simple: to bring Nigerian businesses online and connect them to real opportunities for growth. Whether you sell handmade fashion, run a salon, manage a logistics company, or offer professional services, Kasuwa Gizo helps you reach customers beyond your street, town, or even state.
              </p>

              <p>
                We understand the challenges MSMEs face — from low exposure to the high cost of marketing — and that's why Kasuwa Gizo was designed to level the playing field. With just a few clicks, any business can create a verified profile, upload products, share contact details, and start receiving inquiries from genuine customers across Nigeria.
              </p>

              <p>
                At Kasuwa Gizo, we believe visibility creates possibility. Every business, no matter how small, deserves to be seen, trusted, and supported. Our platform is more than just a listing site — it's a growing digital marketplace built to empower Nigerian businesses to thrive in the modern economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
