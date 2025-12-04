"use client";

import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function BusinessProfilePage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Chioma Okafor",
      date: "3 days ago",
      text: "Your Jollof rice is absolutely incredible! The seasoning is perfect and I love how fresh everything tastes. Keep it up! 💕",
      likes: 12,
    },
    {
      id: 2,
      name: "Tunde Adelani",
      date: "1 week ago",
      text: "Best meat pies in Lagos! I've been ordering every Saturday for my family.",
      likes: 8,
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const businessInfo = {
    name: "Zainab's Kitchen",
    description: "Homemade Nigerian & African Cuisine",
    details:
      "Hi! I'm Zainab, and I cook authentic Nigerian and African dishes using fresh, locally-sourced ingredients. Every meal is prepared with love in my kitchen and delivered fresh to your door. My passion is bringing the warmth of home-cooked food to your family. Order now and taste the difference real home cooking makes!",
    location: "Lagos, Nigeria",
    rating: 4.9,
    reviews: 247,
    status: "Open 10:00 - 20:00",
    verified: true,
  };

  const categories = ["All Dishes", "Soups", "Main Courses", "Sides", "Pastries"];

  const products = [
    {
      id: 1,
      name: "Jollof Rice with Chicken",
      category: "Main Courses",
      price: 3500,
      originalPrice: 4500,
      discount: 22,
      image: "images/food11.jpeg",
      description: "Aromatic golden Jollof rice cooked with tender chicken pieces. Served with fresh salad and fried plantains.",
      inStock: true,
      status: "Available",
      servings: "2 servings",
    },
    {
      id: 2,
      name: "Egusi Soup with Fufu",
      category: "Soups",
      price: 4000,
      originalPrice: null,
      discount: 0,
      image: "images/food12.jpeg",
      description: "Traditional egusi melon seed soup with beef, cooked in authentic spices. Comes with soft fufu.",
      inStock: true,
      status: "Available",
      servings: "2 servings",
    },
    {
      id: 3,
      name: "Pepper Soup & Rice",
      category: "Main Courses",
      price: 3200,
      originalPrice: 4000,
      discount: 20,
      image: "images/food3.jpeg",
      description: "Spicy hot pepper soup with beef chunks and fresh peppers. Served with white rice.",
      inStock: true,
      status: "Available",
      servings: "1 serving",
    },
    {
      id: 4,
      name: "Fried Rice Box",
      category: "Main Courses",
      price: 2500,
      originalPrice: null,
      discount: 0,
      image: "images/food8.jpeg",
      description: "Delicious fried rice with carrots, peas, corn and tender meat pieces.",
      inStock: false,
      status: "Coming Tomorrow",
      servings: "1 serving",
    },
    {
      id: 5,
      name: "Suya (Grilled Meat)",
      category: "Sides",
      price: 2000,
      originalPrice: null,
      discount: 0,
      image: "images/food3.jpeg",
      description: "Perfectly grilled beef suya with authentic spice blend. Served with fresh onions and lime.",
      inStock: true,
      status: "Available",
      servings: "3 skewers",
    },
    {
      id: 6,
      name: "Meat Pie Bundle (6 pcs)",
      category: "Pastries",
      price: 2500,
      originalPrice: null,
      discount: 0,
      image: "images/food4.jpeg",
      description: "Golden, flaky pastry with savory meat filling. Fresh from the oven every morning.",
      inStock: true,
      status: "Available",
      servings: "6 pieces",
    },
  ];

  const businessHours = [
    { day: "Monday", time: "10:00 - 20:00" },
    { day: "Tuesday", time: "10:00 - 20:00" },
    { day: "Wednesday", time: "10:00 - 20:00" },
    { day: "Thursday", time: "10:00 - 20:00" },
    { day: "Friday", time: "10:00 - 21:00" },
    { day: "Saturday", time: "11:00 - 21:00" },
    { day: "Sunday", time: "12:00 - 19:00" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Chioma Okafor",
      rating: 5,
      text: "Zainab's Jollof rice tastes exactly like my mom's! I've been ordering every Friday and my family can't wait. The freshness is unmatched. You're doing amazing!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      verified: true,
    },
    {
      id: 2,
      name: "Tunde Adelani",
      rating: 5,
      text: "The pepper soup is so authentic and flavorful! Quick delivery, hot food, and amazing customer care. Zainab is a gem. Already recommended to 10 friends!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      verified: true,
    },
    {
      id: 3,
      name: "Zainab Adeyemi",
      rating: 5,
      text: "The egusi soup and fufu combo is restaurant-quality but with that special home cooking love. This is exactly what I've been craving!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      verified: true,
    },
    {
      id: 4,
      name: "Emeka Nwankwo",
      rating: 5,
      text: "Best meat pies I've ever tasted! The pastry is so flaky and the filling is perfectly seasoned. Will definitely order more next week!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
      verified: true,
    },
  ];

  const features = [
    {
      id: 1,
      icon: "👨‍🍳",
      title: "Cooked Fresh Daily",
      description: "Everything prepared in my kitchen the same day - no frozen meals, just authentic home cooking",
    },
    {
      id: 2,
      icon: "🚚",
      title: "Quick Delivery",
      description: "Hot meals delivered to your door within 30-45 minutes of order",
    },
    {
      id: 3,
      icon: "🌿",
      title: "Natural Ingredients",
      description: "No artificial additives. Only fresh spices, vegetables, and locally sourced proteins",
    },
    {
      id: 4,
      icon: "❤️",
      title: "Made with Love",
      description: "I cook like I'm serving my own family - with care, attention, and authentic traditional recipes",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "images/food1.jpeg",
      alt: "Jollof Rice",
    },
    {
      id: 2,
      src: "images/food2.jpeg",
      alt: "Pepper Soup",
    },
    {
      id: 3,
      src: "images/food3.jpeg",
      alt: "Fried Rice",
    },
    {
      id: 4,
      src: "images/food4.jpeg",
      alt: "Grilled Suya",
    },
    {
      id: 5,
      src: "images/food5.jpeg",
      alt: "Meat Pies",
    },
    {
      id: 6,
      src: "images/food6.jpeg",
      alt: "Food Spread",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Secret to Perfect Jollof Rice: My Grandmother's Recipe",
      excerpt: "Learn the traditional techniques I use to achieve that perfect golden color and aromatic flavor in every pot of Jollof.",
      image: "images/image.png",
      date: "March 15, 2024",
      category: "Recipe Tips",
    },
    {
      id: 2,
      title: "Why I Cook Fresh Every Single Day",
      excerpt: "My commitment to quality and how I ensure every meal coming from my kitchen is prepared fresh with love.",
      image: "images/image2.png",
      date: "March 10, 2024",
      category: "About Me",
    },
    {
      id: 3,
      title: "Nigerian Soups 101: Which One Should You Try First?",
      excerpt: "A beginner's guide to the most popular Nigerian soups and how each one brings a unique flavor to your table.",
      image: "images/image3.png",
      date: "March 5, 2024",
      category: "Education",
    },
  ];

  const handleAddComment = () => {
    if (newComment.trim() && commentName.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        name: commentName,
        date: "just now",
        text: newComment,
        likes: 0,
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
      setCommentName("");
    }
  };

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-64 bg-gradient-to-r from-gray-400 to-gray-500 overflow-hidden">
        <img
          src="images/kitchen.png"
          alt="Business Header"
          className="w-full h-full object-cover"
        />
        

        <div className="absolute inset-0 flex items-end p-6">
          <div className="flex gap-4 items-end">
            <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex items-center justify-center border-4 border-green-500 shadow-lg">
              <img
                src="images/lady.png"
                alt="Zainab's Kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-white mb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-bold">{businessInfo.name}</h1>
                {businessInfo.verified && (
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-gray-200 font-medium">{businessInfo.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-700 text-sm leading-relaxed mb-4 max-w-3xl">
            {businessInfo.details}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" size={16} />
              <span className="font-semibold text-gray-900">{businessInfo.rating}</span>
              <span className="text-gray-600 text-sm">({businessInfo.reviews} reviews)</span>
            </div>
            <span className="text-sm text-gray-600">📍 {businessInfo.location}</span>
            <span className="text-sm text-gray-600">🕐 {businessInfo.status}</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              <FaPhone size={14} />
              Call
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              <FaWhatsapp size={14} />
              WhatsApp
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
              <FaEnvelope size={14} />
              Email
            </button>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Dishes</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  activeCategory === cat
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{product.discount}%
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-sm text-teal-600 font-medium mb-1">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  {product.servings && (
                    <p className="text-xs text-gray-500 mb-3 italic">📦 {product.servings}</p>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₦{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₦{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        product.inStock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <button
                    disabled={!product.inStock}
                    className={`w-full py-2 rounded-lg font-medium transition-colors text-sm ${
                      product.inStock
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FaWhatsapp size={14} />
                      Order via WhatsApp
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessHours.map((hour) => (
              <div key={hour.day} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-b-0">
                <span className="font-semibold text-gray-900">{hour.day}</span>
                <span className="text-gray-600 text-sm">{hour.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Customers Say</h2>
          <p className="text-teal-100 mb-8">Join hundreds of satisfied customers who love our collections</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="text-xs text-green-600 font-medium">✓ Verified</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={12} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 mb-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
            <p className="text-purple-100 mb-6">Subscribe to our newsletter for exclusive offers, new arrivals, and fashion tips</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments & Reviews</h2>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 text-gray-600"
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts about our food..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 resize-none text-gray-600"
              />
              <button
                onClick={handleAddComment}
                className="w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No comments yet. Be the first to leave a comment!</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                      <p className="text-xs text-gray-500">{comment.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{comment.text}</p>
                  <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                    👍 {comment.likes}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🏪</span>
            <span className="text-2xl font-bold">MSME Hub</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">This business is powered by MSME Hub - Africa's premier marketplace for small businesses</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
