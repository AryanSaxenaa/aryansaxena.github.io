"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C/C++", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Solidity", level: "Beginner" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Google Colab", level: "Intermediate" },
    ],
  },
  {
    title: "Specialized Tools",
    skills: [
      { name: "OpenCV", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Tkinter", level: "Intermediate" },
      { name: "Remix IDE", level: "Beginner" },
      { name: "Machine Learning", level: "Intermediate" },
    ],
  },
]

const certifications = [
  "Python Certification by GUVI",
  "Bitcoin Script Course Certificate by BSV Academy",
  "Bitcoin Enterprise Course Certificate by BSV Academy",
  "Bitcoin Basics: Protocol and Design Course by BSV Academy",
]

export function SkillsSection() {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-green-400"
      case "Intermediate":
        return "text-blue-400"
      case "Beginner":
        return "text-yellow-400"
      default:
        return "text-foreground-secondary"
    }
  }

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Advanced":
        return "w-5/6"
      case "Intermediate":
        return "w-3/5"
      case "Beginner":
        return "w-2/5"
      default:
        return "w-1/2"
    }
  }

  return (
    <section id="skills" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-32"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="space-y-6">
              <h3 className="contact-text text-foreground font-medium">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={skillVariants} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-text text-foreground-secondary">{skill.name}</span>
                      <span className={`meta-text ${getLevelColor(skill.level)}`}>{skill.level}</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-1">
                      <motion.div
                        className={`h-1 rounded-full ${getLevelColor(skill.level).replace("text-", "bg-")} ${getLevelWidth(skill.level)}`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            getLevelWidth(skill.level).replace("w-", "") === "5/6"
                              ? "83.333333%"
                              : getLevelWidth(skill.level).replace("w-", "") === "3/5"
                                ? "60%"
                                : "40%",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={titleVariants} className="contact-text text-foreground font-medium mb-8">
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors duration-300"
              >
                <p className="project-description text-foreground-secondary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
