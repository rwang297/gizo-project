import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets%2F4390856dece946cfa9391a03f41a8205%2F12340f7682414ebaa5abd3ffee85f3a0?format=webp&width=800"
        alt="Business professional with products"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Give Your Business the{' '}
              <span className="text-teal-400">Visibility It Deserves.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Connect with customers, showcase your products and services, and grow your MSME with our easy-to-use platform.
            </p>

           
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/marketplace"
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
              >
                Market place
              </Link>
              <Link
                href="/signup"
                className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
