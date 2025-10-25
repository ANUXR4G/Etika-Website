"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FlowItem {
  title: string
  description: string
  imageAlt: string
  imageQuery: string
  imageSrc?: any // For local images
}

interface FlowSectionProps {
  heading: string
  sub: string
  items: FlowItem[]
}

export function FlowSection({ heading, sub, items }: FlowSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {heading}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {sub}
          </p>
        </motion.div>

        <div className="relative">
          {/* Extended SVG Curved connecting line with animation */}
          <svg 
            className="absolute top-2 left-1/2 -translate-x-1/2 w-[120%] h-48 hidden lg:block pointer-events-none"
            viewBox="0 0 1400 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0e7a3e" stopOpacity="0.2" />
                <stop offset="20%" stopColor="#0e7a3e" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#0e7a3e" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#0e7a3e" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0e7a3e" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Extended smooth flowing curve */}
            <path
              d="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeDasharray="12 8"
              strokeLinecap="round"
            >
              {/* Animated dash movement */}
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="20"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>

            {/* Dots moving along the path */}
            <circle r="6" fill="#0e7a3e" opacity="1">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
              />
            </circle>
            
            <circle r="6" fill="#0e7a3e" opacity="1">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                begin="2s"
                path="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
              />
            </circle>

            <circle r="6" fill="#0e7a3e" opacity="1">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                begin="4s"
                path="M 50 100 Q 200 80, 350 100 Q 500 60, 700 100 Q 900 140, 1050 100 Q 1200 80, 1350 100"
              />
            </circle>

            {/* Arrow markers at key points */}
            <path
              d="M 700 100 L 695 95 M 700 100 L 695 105"
              fill="none"
              stroke="#0e7a3e"
              strokeWidth="2.5"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex flex-col items-center z-10"
              >
                {/* Circle with image */}
                <motion.div 
                  className="relative w-48 h-48 mb-8 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-primary bg-background shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20" />
                  
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.4,
                    }}
                  />
                  
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <img
                        src={`https://source.unsplash.com/400x400/?${item.imageQuery}`}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Number badge with pulse */}
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full whitespace-nowrap text-sm font-medium text-primary-foreground shadow-md"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.4,
                    }}
                  >
                    Step {idx + 1}
                  </motion.div>
                </motion.div>

                {/* Card with hover effect */}
                <motion.div 
                  className="p-6 rounded-2xl text-center max-w-sm bg-card border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-500px); }
        }
      `}</style>
    </section>
  )
}
