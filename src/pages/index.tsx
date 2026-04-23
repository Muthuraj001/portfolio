"use client"
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, MapPin, Briefcase, GraduationCap, Layout, Database, Monitor, Code, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <>
      <Head>
        <title>Muthuraj P | Portfolio</title>
        <meta name="description" content="Portfolio of Muthuraj P - Software Testing Intern & Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-accent/30">
        {/* Ambient Mesh Gradient Background */}
        <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

        {/* Floating Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass rounded-full px-6 py-3 flex items-center gap-8 text-sm font-medium tracking-wide shadow-2xl"
          >
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          </motion.div>
        </nav>

        <main className="relative z-10 container mx-auto px-6 pt-32 pb-24 max-w-5xl">

          {/* Hero Section */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 relative">
                Muthuraj P
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl font-semibold mb-8 text-gradient"
            >
              Software Testing Intern & Web Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 items-center justify-center"
            >
              <a href="mailto:muthuraj.p001@gmail.com" className="p-3 rounded-full glass hover:bg-white/10 hover:border-accent/50 transition-all group">
                <Mail className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:border-accent/50 transition-all group">
                <LinkedinIcon className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:border-accent/50 transition-all group">
                <GithubIcon className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
            </motion.div>
          </section>

          {/* Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min" id="about">

            {/* Education Card */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-1 glass rounded-3xl p-8 relative overflow-hidden group hover:border-accent/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <GraduationCap className="w-8 h-8 mb-6 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-foreground/70 mb-1">Bachelor of Engineering</p>
              <p className="text-sm text-foreground/50">Unnamalai Institute of Technology</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10">
                2021 - 2025
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              id="skills"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:border-emerald/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-emerald-400" />
                Technical Stack
              </h3>

              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Java", icon: <Database className="w-4 h-4" />, color: "hover:border-orange-500/50 hover:text-orange-400" },
                  { name: "SQL", icon: <Database className="w-4 h-4" />, color: "hover:border-blue-500/50 hover:text-blue-400" },
                  { name: "HTML5", icon: <Layout className="w-4 h-4" />, color: "hover:border-red-500/50 hover:text-red-400" },
                  { name: "CSS3", icon: <Monitor className="w-4 h-4" />, color: "hover:border-blue-400/50 hover:text-blue-300" }
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2 px-4 py-3 glass rounded-xl cursor-default transition-all duration-300 ${skill.color}`}
                  >
                    {skill.icon}
                    <span className="font-medium tracking-wide">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              id="experience"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-3 glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-10 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent" />
                Experience
              </h3>

              <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12">
                {[
                  {
                    company: "Salesqueen",
                    role: "Software Testing Intern",
                    type: "testing",
                    icon: <Monitor className="w-5 h-5" />
                  },
                  {
                    company: "IPCS Global",
                    role: "Intern",
                    type: "development",
                    icon: <Code className="w-5 h-5" />
                  },
                  {
                    company: "Buleline",
                    role: "Intern",
                    type: "development",
                    icon: <Code className="w-5 h-5" />
                  }
                ].map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative pl-8 md:pl-12"
                  >
                    <div className="absolute -left-[20px] top-0 p-2 rounded-full bg-background border border-accent/50 text-accent">
                      {job.icon}
                    </div>
                    <h4 className="text-xl font-medium text-foreground">{job.role}</h4>
                    <p className="text-accent/80 mt-1">{job.company}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              id="projects"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-3 mt-4"
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-accent" />
                Featured Projects
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Air Quality Monitoring",
                    desc: "An innovative system for tracking and analyzing environmental metrics.",
                    tags: ["IoT", "Data Analysis", "Monitoring"]
                  },
                  {
                    title: "Website Design",
                    desc: "Modern, responsive web interfaces with focus on user experience.",
                    tags: ["UI/UX", "HTML/CSS", "Responsive"]
                  }
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                    style={{ perspective: 1000 }}
                    className="glass rounded-3xl p-8 relative group overflow-hidden transition-all duration-500 hover:border-accent/40"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 rounded-2xl">
                        <Monitor className="w-6 h-6 text-foreground/80 group-hover:text-accent transition-colors" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors" />
                    </div>

                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-foreground/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </section>

          {/* Footer */}
          <footer className="mt-32 pt-8 border-t border-white/10 text-center text-sm text-foreground/50">
            <p>© {new Date().getFullYear()} Muthuraj P. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
}
