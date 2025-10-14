'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const benefits = [
    {
      title: 'Boost Energy',
      description: 'Naturally elevate your energy levels without the crash. Our blend provides sustained vitality throughout your day.'
    },
    {
      title: 'Fast-Acting Results',
      description: 'Feel the difference within minutes. Our fast-absorbing formula delivers quick and noticeable improvements.'
    },
    {
      title: 'All-Natural Formula',
      description: 'Crafted with the finest natural ingredients. No artificial additives or harmful chemicals in our blend.'
    },
    {
      title: 'Enhance Focus',
      description: 'Sharpen your mental clarity and improve concentration for peak performance in your daily tasks.'
    }
  ]

  const ingredients = [
    {
      name: 'Filtered Water',
      image: 'https://via.placeholder.com/300x200/4a90e2/ffffff?text=Filtered+Water'
    },
    {
      name: 'Standardized Mitragynine Speciosa Extract',
      image: 'https://via.placeholder.com/300x200/7fb069/ffffff?text=Extract'
    },
    {
      name: 'Citric Acid',
      image: 'https://via.placeholder.com/300x200/f4c542/ffffff?text=Citric+Acid'
    }
  ]

  const comparisonData = [
    { feature: 'Vitamins', ag1: true, multivitamin: true, greens: false, probiotic: false },
    { feature: 'Minerals', ag1: true, multivitamin: true, greens: false, probiotic: false },
    { feature: 'Probiotics', ag1: true, multivitamin: false, greens: false, probiotic: true },
    { feature: 'Greens & Superfoods', ag1: true, multivitamin: false, greens: true, probiotic: false },
    { feature: 'Adaptogens', ag1: true, multivitamin: false, greens: false, probiotic: false },
    { feature: 'Digestive Enzymes', ag1: true, multivitamin: false, greens: false, probiotic: true },
  ]

  const testimonials = [
    {
      name: 'Alex Gordon Max',
      role: 'Manager at ABC',
      text: "I've been using this product for 3 months now and the results are amazing! My energy levels are through the roof and I feel more focused than ever.",
      rating: 5
    },
    {
      name: 'Alex Gordon Max',
      role: 'Manager at XYZ',
      text: "This is the best supplement I've ever tried. The natural ingredients make all the difference and I love that it's chemical-free.",
      rating: 5
    }
  ]

  const faqData = [
    {
      question: 'Do you have information about the routine?',
      answer: 'Yes, we recommend taking one scoop daily mixed with water or your favorite beverage. Best taken in the morning for optimal energy throughout the day.'
    },
    {
      question: 'How many days necessary to used to see results?',
      answer: 'Most users report noticeable improvements in energy and focus within 1-2 weeks of consistent daily use. Full benefits are typically experienced after 30 days.'
    },
    {
      question: 'Do we have any strategy that benefit our products in one routine?',
      answer: 'Our all-in-one formula simplifies your wellness routine by combining multiple supplements into one convenient scoop, saving you time and money.'
    },
    {
      question: 'Our product is dangerous? maximum one scoop? All dosage of potencies and nutritional profile?',
      answer: 'Our product is completely safe when used as directed. We recommend a maximum of one scoop per day. All ingredients are carefully measured and clinically tested.'
    },
    {
      question: 'Are you looking for content the routinize?',
      answer: 'Yes, we provide comprehensive guidance and content to help you integrate our product into your daily routine for maximum benefits.'
    }
  ]

  const instagramPosts = [
    { id: '1', image: 'https://via.placeholder.com/250x250/f9f9f9/2d5016?text=Product+1', alt: 'Product bottle on white background' },
    { id: '2', image: 'https://via.placeholder.com/250x250/6fbd44/ffffff?text=Product+2', alt: 'Green leaves with product' },
    { id: '3', image: 'https://via.placeholder.com/250x250/7fb069/ffffff?text=Nature', alt: 'Fresh green plant leaves' },
    { id: '4', image: 'https://via.placeholder.com/250x250/2d5016/ffffff?text=Leaves', alt: 'Tropical leaf pattern' }
  ]

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm px-6 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <svg width="30" height="30" viewBox="0 0 30 30" className="fill-green-800">
            <path d="M15 5 L20 15 L15 25 L10 15 Z"/>
          </svg>
          <span className="text-xl font-bold text-green-900">Zen Herbals</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#home" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-green-500 transition-colors font-medium">About Us</a>
          <a href="#products" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Products</a>
          <a href="#contact" className="text-gray-700 hover:text-green-500 transition-colors font-medium">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-green-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-green-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-green-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="bg-green-900 text-white px-6 py-2.5 rounded-full text-sm hover:bg-green-950 transition-all shadow-md hover:shadow-lg">
            Purchase
          </button>
        </div>

        <button 
          className="md:hidden text-2xl text-green-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden border-t">
            <a href="#home" className="text-sm text-gray-700 hover:text-green-500">Home</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-green-500">About Us</a>
            <a href="#products" className="text-sm text-gray-700 hover:text-green-500">Products</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-green-500">Contact</a>
            <button className="bg-green-900 text-white px-6 py-2.5 rounded-full text-sm mt-2">
              Purchase
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-400 via-green-500 to-lime-400 px-6 lg:px-20 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden min-h-[650px]">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] left-[-60px] w-[350px] h-[350px] bg-white/15 rounded-full blur-2xl"></div>
        
        {/* Decorative Wave Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="white" d="M40,-60C52,-50,62,-38,70,-25C78,-12,85,2,85,18C85,34,78,52,65,62C52,72,33,75,15,75C-3,75,-20,72,-35,65C-50,58,-63,47,-70,33C-77,19,-78,2,-75,-15C-72,-32,-65,-49,-53,-59C-41,-69,-20,-72,-1,-70C18,-68,28,-70,40,-60Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-xl z-10 text-left lg:pr-10">
          <h1 className="text-4xl lg:text-[52px] font-bold text-green-900 mb-6 leading-[1.1]">
            Feel the <span className="font-extrabold">Natural Power</span><br/>
            <span className="text-[42px] lg:text-[48px]">Elevate</span> Your Energy<br/>
            and Focus
          </h1>
          <p className="text-green-900/90 mb-8 text-[15px] leading-relaxed">
            Unlock your full potential with our premium botanical supplement to elevate energy, enhance mental clarity and overall wellness. Experience the power of nature in every drop.
          </p>
          <button className="bg-green-900 text-white px-9 py-3.5 rounded-full text-[15px] font-medium hover:bg-green-950 hover:shadow-xl transition-all">
            Explore Now
          </button>
          
          {/* Rating */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-[13px] text-green-900/80">4.8/5 (2.5k+ Verified 5-Star Reviews)</span>
          </div>
        </div>
        
        {/* Product Image Placeholder */}
        <div className="relative z-10 mt-10 lg:mt-0">
          <div className="relative w-[320px] h-[420px] lg:w-[380px] lg:h-[480px]">
            <Image 
              src="https://via.placeholder.com/400x500/6fbd44/ffffff?text=Product+Bottles" 
              alt="Natural supplement bottles with dropper"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Trust Badge */}
        <div className="absolute bottom-12 lg:bottom-24 right-6 lg:right-32 bg-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 z-20">
          <div className="bg-green-500/10 p-2 rounded-lg">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-green-900">Certified Quality</p>
            <p className="text-[11px] text-gray-500">100% Organic</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 text-center bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-3">Our Products Benifits</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-[15px]">
          Unlock our full potential with our unique blend of natural supplement that 
          provides energy and mental clarity, supporting your wellness goals.
        </p>
        
        {/* Central Product Image with Benefits Around */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {/* Left Column */}
            <div className="space-y-10 text-left">
              <div>
                <h3 className="text-lg font-bold text-green-900 mb-2">Boost Energy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Naturally elevate your energy levels without the crash. Our blend provides sustained vitality throughout your day.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-900 mb-2">All-Natural Formula</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Crafted with the finest natural ingredients. No artificial additives or harmful chemicals in our blend.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10 text-left">
              <div>
                <h3 className="text-lg font-bold text-green-900 mb-2">Fast-Acting Results</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Feel the difference within minutes. Our fast-absorbing formula delivers quick and noticeable improvements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-900 mb-2">Enhance Focus</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sharpen your mental clarity and improve concentration for peak performance in your daily tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Center Product Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="relative w-48 h-64">
              <Image 
                src="https://via.placeholder.com/200x260/7fb069/ffffff?text=Product" 
                alt="Product bottle with leaves"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <button className="bg-green-600 text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-green-700 hover:shadow-lg transition-all">
          Shop Now
        </button>
      </section>

      {/* Ingredients Section */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-green-50 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-3">What is our key Ingredients?</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-[15px]">
          Unlock our full potential with a unique blend designed to elevate energy, 
          enhance mental clarity, and here are our ingredients:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative w-full h-52">
                <Image 
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-green-900 leading-snug">{ingredient.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-14">AG1 is a more in one solution</h2>
        
        <div className="overflow-x-auto">
          <table className="max-w-4xl mx-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-semibold text-green-900 text-sm"></th>
                <th className="p-4 text-center font-bold bg-green-900 text-white rounded-t-lg text-sm">AG1</th>
                <th className="p-4 text-center font-semibold text-gray-600 text-sm">Multivitamin</th>
                <th className="p-4 text-center font-semibold text-gray-600 text-sm">Greens</th>
                <th className="p-4 text-center font-semibold text-gray-600 text-sm">Probiotic</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4 text-left text-gray-700 text-sm">{row.feature}</td>
                  <td className="p-4 text-center bg-green-900 text-white text-lg font-bold">
                    {row.ag1 ? '✓' : '○'}
                  </td>
                  <td className="p-4 text-center text-lg">
                    <span className={row.multivitamin ? 'text-green-600 font-bold' : 'text-gray-300'}>
                      {row.multivitamin ? '✓' : '○'}
                    </span>
                  </td>
                  <td className="p-4 text-center text-lg">
                    <span className={row.greens ? 'text-green-600 font-bold' : 'text-gray-300'}>
                      {row.greens ? '✓' : '○'}
                    </span>
                  </td>
                  <td className="p-4 text-center text-lg">
                    <span className={row.probiotic ? 'text-green-600 font-bold' : 'text-gray-300'}>
                      {row.probiotic ? '✓' : '○'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="currentColor" className="text-green-600" d="M40,-60C52,-50,62,-38,70,-25C78,-12,85,2,85,18C85,34,78,52,65,62C52,72,33,75,15,75C-3,75,-20,72,-35,65C-50,58,-63,47,-70,33C-77,19,-78,2,-75,-15C-72,-32,-65,-49,-53,-59C-41,-69,-20,-72,-1,-70C18,-68,28,-70,40,-60Z" transform="translate(100 100)" />
          </svg>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-3">Whole Body Benefits in one Scoop</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-[15px]">
          Fuel your body with our comprehensive formula that supports immunity, energy, 
          recovery, and more from just one daily scoop.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center relative z-10">
          <div className="relative w-[300px] h-[400px] lg:w-[380px] lg:h-[480px] flex-shrink-0">
            <Image 
              src="https://via.placeholder.com/400x500/2d5016/ffffff?text=Lucky+90+Product" 
              alt="Lucky 90 Product packaging"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          
          <div className="text-left flex-1 space-y-5">
            <p className="text-gray-700 leading-relaxed text-[15px]">
              Unlock your AG1premium with a unique blend designed to elevate energy, enhance mental 
              clarity, and help you feel your best. With just one scoop, you're giving your body the 
              nutrients it needs designed to elevate energy enhance mental clarity, and help you feel 
              your best. With just one energy, enhance mental clarity.
            </p>
            <p className="text-gray-700 leading-relaxed text-[15px]">
              Unlock your AG1premium with a unique blend designed to elevate energy, enhance mental 
              clarity, and help you feel your best. With just one scoop, you're energy, enhance 
              mental clarity.
            </p>

            {/* Customer Photo Placeholder */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mt-6 bg-green-100">
              <Image 
                src="https://via.placeholder.com/600x200/9FD462/ffffff?text=Happy+Customer"
                alt="Happy customer"
                fill
                className="object-cover"
              />
            </div>

            <button className="bg-green-600 text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-green-700 hover:shadow-lg transition-all mt-6">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-3">What members saying about Us</h2>
        <p className="text-gray-600 mb-12 text-[15px]">
          Unlock our full potential with a unique blend designed to elevate energy, 
          enhance mental clarity.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl text-left shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-green-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-3xl text-green-600 font-serif">"</span>
                </div>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">{testimonial.text}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-gradient-to-br from-green-400 via-green-500 to-lime-400 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Get latest updates and offers</h2>
          <p className="mb-10 max-w-2xl mx-auto text-[15px] text-white/90">
            Subscribe to our newsletter to stay updated on our latest products, exclusive 
            offers, and wellness tips delivered to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Your email address here" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="flex-1 px-6 py-4 rounded-lg text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="bg-green-900 text-white px-10 py-4 rounded-lg text-sm font-medium hover:bg-green-950 transition-all shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-3">FAQs</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-[15px]">
          Unlock our full potential with a unique blend designed to elevate energy, 
          enhance mental clarity, and here are our ingredients:
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden text-left border border-gray-100">
              <button 
                className="w-full p-5 flex justify-between items-center hover:bg-gray-100/70 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[15px] pr-6 text-green-900 font-medium">{faq.question}</span>
                <span className={`text-2xl text-green-600 flex-shrink-0 transition-transform ${openFAQIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openFAQIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-[14px] animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 bg-gray-50">
        <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-900">Instagram</h2>
          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full border-2 border-gray-300 bg-white hover:border-green-600 hover:text-green-600 transition-all flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-11 h-11 rounded-full border-2 border-gray-300 bg-white hover:border-green-600 hover:text-green-600 transition-all flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {instagramPosts.map((post) => (
            <a 
              key={post.id}
              href="#" 
              className="relative aspect-square rounded-xl overflow-hidden block hover:scale-105 transition-transform shadow-md hover:shadow-xl group"
            >
              <Image 
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover group-hover:brightness-110 transition-all"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 max-w-7xl mx-auto">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg width="30" height="30" viewBox="0 0 30 30" className="fill-white">
                <path d="M15 5 L20 15 L15 25 L10 15 Z"/>
              </svg>
              <span className="text-xl font-bold">Zen Herbals</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
              Premium natural supplements for enhanced wellness and vitality. Experience the power of nature with every drop.
            </p>
            <div className="flex gap-3">
              {['f', 'in', 't', 'ig', 'yt'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Quick Link</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 text-sm hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#products" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Help</h3>
            <ul className="space-y-3">
              <li><a href="#support" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Support</a></li>
              <li><a href="#faqs" className="text-gray-400 text-sm hover:text-green-400 transition-colors">FAQs</a></li>
              <li><a href="#shipping" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Shipping</a></li>
              <li><a href="#returns" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Returns</a></li>
              <li><a href="#privacy" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li><a href="mailto:info@zenherbals.com" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Email</a></li>
              <li><a href="tel:+1234567890" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Phone</a></li>
              <li><a href="#address" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Address</a></li>
              <li><a href="#support" className="text-gray-400 text-sm hover:text-green-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">© 2025 ZenHerbals. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-white z-50">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </main>
  )
}
