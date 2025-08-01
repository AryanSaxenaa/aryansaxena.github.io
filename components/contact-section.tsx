"use client"

import { motion } from "framer-motion"
import { Copy, ExternalLink } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("asaxena50be23@thapar.edu")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
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

  return (
    <section id="across-the-web" className="section-spacing pb-40">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:asaxena50be23@thapar.edu"
                    className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300"
                    onClick={(e) => {
                      if (window.innerWidth < 768) {
                        e.preventDefault()
                        copyEmail()
                      }
                    }}
                  >
                    asaxena50be23@thapar.edu
                  </a>
                  <button
                    onClick={copyEmail}
                    className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
                    aria-label="Copy email address"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </button>
                  {emailCopied && <span className="meta-text text-foreground/60 ml-1">Copied</span>}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Phone</span>
                <a
                  href="tel:+917302752999"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300"
                >
                  +91 7302752999
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/aryansaxena50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2"
                >
                  linkedin.com/in/aryansaxena50
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">GitHub</span>
                <a
                  href="https://github.com/aryansaxena50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2"
                >
                  github.com/aryansaxena50
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Education</span>
                <div className="text-right">
                  <div className="contact-text text-foreground">Thapar Institute</div>
                  <div className="meta-text text-foreground-secondary">B.E. Computer Engineering</div>
                  <div className="meta-text text-foreground-tertiary">2023 - 2026</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Skills</span>
                <div className="text-right max-w-xs">
                  <div className="meta-text text-foreground-secondary">
                    C/C++, Python, JavaScript, React, MongoDB, Flask, Express
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Certifications</span>
                <div className="text-right max-w-xs">
                  <div className="meta-text text-foreground-secondary">
                    Python (GUVI), Bitcoin Script & Enterprise (BSV Academy)
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Location</span>
                <div className="contact-text text-foreground">India</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
