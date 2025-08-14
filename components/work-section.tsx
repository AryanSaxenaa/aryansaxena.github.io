"use client"

import { motion } from "framer-motion"
import { easeInOut } from "framer-motion"

const projects = [
  {
    id: 0,
    title: "PageOneCV",
    category: "Web Application",
    year: "2025",
    description:
      "Resume builder allowing users to create, edit, manage, and export multiple resumes. Secure authentication, serverless API endpoints, and client-side PDF generation for professional exports.",
    link: "https://github.com/AryanSaxenaa/pageone-cv",
    tech: "React, TypeScript, Tailwind CSS, Node.js, MongoDB, JWT, jsPDF",
  },
  {
    id: 1,
    title: "FinWell Quest",
    category: "Mobile App",
    year: "2025",
    description:
      "Gamified personal finance app with XP system, daily challenges, leaderboards, and Google Gemini AI for personalized advice. Secure Plaid API integration and D3.js-powered visualizations.",
    link: "https://github.com/AryanSaxenaa/Finwell-Quest",
    tech: "React Native, Expo, JavaScript, Zustand, Plaid API, Google Gemini AI, D3.js, SQLite",
  },
  {
    id: 2,
    title: "Eventcraft",
    category: "Web Application",
    year: "2025",
    description:
      "Event management platform with automated notifications, ticketing, multi-role access, and AI-powered chatbot. Multi-channel notification system using Twilio SMS and SendGrid email.",
    link: "https://github.com/AryanSaxenaa/Eventcraft",
    tech: "React, Node.js, Express, MongoDB, Auth0, Redux Toolkit, Twilio, SendGrid, Google Gemini API",
  },
]

const experiences = [
  {
    id: 0,
    title: "Xebia",
    role: "Full Stack Developer Intern",
    period: "June - July 2025",
    description:
      "Developed a notification system integrating Twilio (SMS) and SendGrid (email) for event reminders, confirmations, and admin alerts. Implemented scheduled message delivery using node-cron for automated communications.",
    link: "#",
    tech: "Node.js, Twilio, SendGrid, node-cron",
  },
  {
    id: 1,
    title: "Sahu Technologies",
    role: "Web Developer Intern",
    period: "September - October 2022",
    description:
      "Recreated responsive web pages from design mockups using HTML, CSS, and JavaScript. Contributed to the UI development of the company’s EdTech platform.",
    link: "#",
    tech: "HTML, CSS, JavaScript",
  },
]

export function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="work" className="section-spacing">
      <div className="container-xl">
        {/* Projects Section */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {project.title}
                  </h3>
                  <div className="meta-text text-foreground-secondary">{project.year}</div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="meta-text text-foreground-tertiary">{project.category}</span>
                  <span className="meta-text text-foreground-tertiary">•</span>
                  <span className="meta-text text-foreground-tertiary">{project.tech}</span>
                </div>

                {/* Project description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-3xl pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="border-t border-foreground/10 mt-0"></motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience) => (
            <motion.div key={experience.id} variants={itemVariants}>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                      {experience.title}
                    </h3>
                    <div className="meta-text text-foreground-secondary mt-1">{experience.role}</div>
                  </div>
                  <div className="meta-text text-foreground-secondary text-right">{experience.period}</div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="meta-text text-foreground-tertiary">{experience.tech}</span>
                </div>

                {/* Experience description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-3xl pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {experience.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="border-t border-foreground/10 mt-0"></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
