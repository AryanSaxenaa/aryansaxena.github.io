"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 0,
    title: "DiploEdge",
    category: "Web Development",
    year: "2024",
    description:
      "A comprehensive platform designed to guide diploma engineering students. Provides a one-stop shop for study materials, job openings, higher studies entrance exam updates, and articles to guide students through their academic journey.",
    link: "#", // Replace with actual link when available
    tech: "HTML, CSS, Bootstrap, JavaScript, Express, MongoDB",
  },
  {
    id: 1,
    title: "Real-time Face Recognition System",
    category: "Computer Vision",
    year: "2024",
    description:
      "Implemented a real-time solution demonstrating foundational knowledge in computer vision algorithms. Built using Python with Tkinter for GUI, OpenCV for image processing, and NumPy for numerical computations.",
    link: "#", // Replace with actual link when available
    tech: "Python, Tkinter, OpenCV, NumPy",
  },
  {
    id: 2,
    title: "Malicious URL Detector",
    category: "Machine Learning",
    year: "2024",
    description:
      "Developed a security-focused system using machine learning techniques to detect malicious URLs. Features include advanced feature extraction, XGBoost classification model, and comprehensive result visualization.",
    link: "#", // Replace with actual link when available
    tech: "Python, Flask, Machine Learning, XGBoost",
  },
]

const experiences = [
  {
    id: 0,
    title: "Timechain Summer of Code",
    role: "Contributor",
    period: "June - July 2024",
    description:
      "Successfully participated in TSOC 24 and qualified for the Coding Phase, where only 20% of participants advanced. Contributed to blockchain and cryptocurrency-related projects.",
    link: "#",
    tech: "Blockchain, Cryptocurrency",
  },
  {
    id: 1,
    title: "Hacktoberfest",
    role: "Open Source Contributor",
    period: "October 2023",
    description:
      "Actively participated in Hacktoberfest 2023, making valuable contributions to numerous open-source repositories. Focused on improving documentation, fixing bugs, and adding new features.",
    link: "https://github.com/aryansaxena50",
    tech: "Various Technologies",
  },
  {
    id: 2,
    title: "Sahu Technologies",
    role: "Web Development Intern",
    period: "September - October 2022",
    description:
      "Designed and developed template pages for educational content during internship at Sahu Technologies. Created responsive and user-friendly interfaces for their EdTech platform.",
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
