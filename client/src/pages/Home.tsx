import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Menu, 
  X, 
  ChevronRight,
  Code2,
  Database,
  Layout,
  Terminal,
  Cpu,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
//import heroBg from "@assets/generated_images/abstract_dark_tech_geometric_background.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { toast } = useToast();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold font-display tracking-tight text-primary">
              Devi<span className="text-foreground"> Prasad</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button size="sm" onClick={() => scrollToSection("contact")}>Hire Me</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-border bg-background"
            >
              <div className="container px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`text-left text-lg font-medium py-2 ${
                      activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 opacity-20"
          // style={{
          //   backgroundImage: `url(${heroBg})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            {/* <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/5 px-3 py-1">
                Available for New Opportunities
              </Badge>
            </motion.div> */}
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Devi Prasad</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              Senior Software Development Engineer
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Senior Software Engineer | Java, Spring Boot & Microservices Expert – 
            I build scalable, high-performance web applications, specializing in 
            full-stack development, cloud architecture, and exceptional user experiences.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("contact")}>
                Contact Me <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-12 flex gap-6 text-muted-foreground">
              <a href="https://github.com/prasaddevi907" className="hover:text-primary transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/devi-prasad907/" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:contact@prasaddevi907@gmail.com" className="hover:text-primary transition-colors"><Mail size={24} /></a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-70" />
                <div className="relative bg-card border border-border/50 rounded-xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 font-display">Fast Facts</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary"><Code2 size={20} /></div>
                      <span>4+ Years of Experience  – Extensive background in designing, developing, and deploying software solutions across diverse domains.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary"><Globe size={20} /></div>
                      <span>8+ Projects Delivered  – Proven track record of completing high-impact projects on time with measurable results.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary"><Terminal size={20} /></div>
                      <span>Clean Code Advocate  – Emphasizes readable, efficient, and scalable coding practices that reduce technical debt.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary"><Cpu size={20} /></div>
                      <span>System Design Expert  – Skilled at building robust, scalable, and distributed systems tailored to business needs.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a passionate Senior Software Engineer with over 4+ years of experience in designing 
                  and developing robust web applications. My journey started with a curiosity for how 
                  things work on the web, which evolved into a career building complex systems for enterprise clients.
                </p>
                <p>
                  I specialize in the JavaScript ecosystem, with deep expertise in Java, Spring Boot, Rest API, and 
                  cloud infrastructure. I believe in writing code that is not only functional but also 
                  maintainable and scalable.
                </p>
                <p>
                  When I'm not coding, I'm mentoring junior developers, contributing to open-source 
                  projects, or exploring the latest trends in technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-primary" /> Frontend Development
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Java /Core Java", level: 85 },
                  { name: "Spring Boot", level: 85 },
                  { name: "React Js", level: 60 },
                  { name: "HTML5 / CSS3 & Java Script", level: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="text-primary" /> Backend & DevOps
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Microservices", level: 80 },
                  { name: "DSA", level: 75 },
                  { name: "PostgreSQL / SQL", level: 70},
                  { name: "AWS / Cloud Infrastructure", level: 60 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in the software industry.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative pl-8 border-l border-border/50 space-y-12">
            {[
              {
                role: "Senior Software Engineer",
                company: "CBSL Group",
                period: "18 Feb 2024 - Present",
                description: "Leading a team of 8 developers in building a cloud-native SaaS platform. Architected the microservices infrastructure and reduced deployment time by 40%."
              },
              {
                role: "Java Developer",
                company: "Nexsus Bussiness Solutions Pvt Ltd.",
                period: "8 Dec 2021 - 17 Feb 2024",
                description: "Built responsive websites for various clients. Collaborated with designers to implement pixel-perfect UIs and accessible interfaces."
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl font-bold">{job.role}</CardTitle>
                      <Badge variant="secondary" className="w-fit">{job.period}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-primary">{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "EFILING – E-Court Case Registration System",
                desc: "Developed Reporting Module to improve judicial data retrieval performance. Optimized Hibernate queries to handle high-volume data.",
                tech: ["Java", "Spring Boot", "React Js", "PostgreSQL"],
                link: "#"
              },
              {
                title: "PDMS – Physical Document Management System",
                desc: "Created a robust validation workflow reducing digitization files errors.Provided continuous live support ensuring high uptime for High Court operations.",
                tech: ["Java", "Spring Boot", "React Js", "PostgreSQL"],
                link: "#"
              },
              {
                title: "REST API / CLIENT – Case File Exchange Microservice",
                desc: "Developed secure Spring Boot Microservices API with Basic Authentication.Connected two enterprise applications for seamless case file exchange.",
                tech: ["Java", "Spring Boot", "React Js", "PostgreSQL"],
                link: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full flex flex-col border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs bg-secondary/50 border-border/50">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {/* <CardFooter className="pt-0">
                    <div className="flex gap-4 w-full">
                      <Button variant="outline" size="sm" className="w-full flex gap-2">
                        <Github size={16} /> Code
                      </Button>
                      <Button size="sm" className="w-full flex gap-2">
                        <Globe size={16} /> Demo
                      </Button>
                    </div>
                  </CardFooter> */}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Get In Touch</h2>
              <p className="text-muted-foreground text-lg mb-8">
                I'm currently interested in new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">contact@prasaddevi907@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/devi-prasad907/</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-muted-foreground">github.com/prasaddevi907</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required className="bg-secondary/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email address" required className="bg-secondary/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" placeholder="What's on your mind?" className="min-h-[120px] bg-secondary/50" required />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40 bg-background text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Devi Prasad. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-muted-foreground/60">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            {/* <span>•</span>
            <a href="/portfolio_source.zip" className="hover:text-primary flex items-center gap-1" download>
              <Download size={14} /> Source Code
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
