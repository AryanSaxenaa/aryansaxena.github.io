"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export function HeroSection() {
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.4,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center">
      <div className="container-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-8">
              <motion.div variants={itemVariants} className="mb-16">
                <h1 className="hero-title text-foreground/80 whitespace-normal">ARYAN SAXENA</h1>
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-2xl">
                <p className="hero-subtitle text-foreground-secondary">
                  Computer Engineering Student & Full Stack Developer building innovative solutions.
                </p>
              </motion.div>
            </div>

            {/* Portrait Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div variants={imageVariants} className="relative">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <img
                    src="/images/aryan-portrait.png"
                    alt="Aryan Saxena Portrait"
                    className="w-full h-full object-cover rounded-2xl opacity-70 hover:opacity-90 transition-opacity duration-700 ease-out"
                    style={{
                      filter: "contrast(1.1) brightness(1.1)",
                    }}
                    onError={(e) => {
                      // Fallback to different image names
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('aryan-portrait.png')) {
                        target.src = '/images/portrait.png';
                      } else if (target.src.includes('portrait.png')) {
                        target.src = './images/aryan-portrait.png';
                      } else {
                        target.style.display = 'none';
                      }
                    }}
                  />
                  {/* Subtle overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20 rounded-2xl" />

                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border border-foreground/10" />
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-foreground/20 rounded-full opacity-60" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border border-foreground/10 rounded-full opacity-40" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
