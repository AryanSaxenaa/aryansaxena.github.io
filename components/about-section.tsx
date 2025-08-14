"use client"

import { motion } from "framer-motion"
import { easeInOut } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: easeInOut,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
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
        ease: easeInOut,
      },
    },
  }
  return (
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          About
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
        >
          <motion.div variants={itemVariants} className="flex flex-col space-y-16">
            <div>
              <p className="body-text text-foreground-secondary">
                Computer Engineering student at Thapar Institute of Engineering and Technology with a strong foundation
                in full-stack development and machine learning.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                Currently pursuing B.E. in Computer Engineering (2023-2026) with experience in C/C++, Python,
                JavaScript, and modern web technologies.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col space-y-16">
            <div>
              <p className="body-text text-foreground-secondary">
                Passionate about building solutions that solve real-world problems, from educational platforms to
                security systems.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                Active contributor to open-source projects and hackathons. Always eager to learn new technologies and
                collaborate on exciting projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
