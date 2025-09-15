import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { skills } from "@/data/skills";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const experience = [
  {
    company: "Nova Coders Community",
    position: "Co-founder",
    period: "2024 - Present",
    description: "Co-founded a growing community focused on Python development, AI/ML, cybersecurity, and automation. Helping peers collaborate and upskill through projects and events."
  },
  {
    company: "Vision Institute of Technology, Aligarh",
    position: "Hackathon Organizer",
    period: "2024 - Present",
    description: "Led the organization of technical hackathons including Hack Gear 1.0, enabling students to innovate in AI, Blockchain, and Automation with industry collaboration."
  },
  {
    company: "Freelance & Academic Projects",
    position: "Python Developer & Project Lead",
    period: "2022 - Present",
    description: "Led and contributed to 10+ projects focused on AI/ML, automation systems, IoT integrations, and cybersecurity tools. Skilled in cloud-based deployment using Azure, passionate about solving real-world problems with scalable solutions."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Developer driven by curiosity, creativity, and clean code. 
                I specialize in building AI tools, dynamic web apps, and organizing tech events 
                like Hack Gear 1.0. I enjoy turning ideas into impactful digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My strengths lie in rapid prototyping, backend engineering, and blending 
                technical logic with user-first design. I'm passionate about Python development, 
                cybersecurity, and building next-gen AI-powered solutions.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Aligarh, Uttar Pradesh, India
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  harshvardhan02102002@gmail.com
                </div>
              </div>
              <Button variant="hero" size="lg" className="group">
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-hero/10">
                <img
                  src="/images/blog/Harsh vardhan.jpeg"
                  alt="Harsh Vardhan - Software Developer | Ethical Hacker | Tech Innovator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="Experience"
            subtitle="My professional journey and career highlights"
            className="mb-16"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-primary/20 last:border-l-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-2 translate-y-1" />
                <Card className="ml-4">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{item.position}</CardTitle>
                        <p className="text-primary font-medium">{item.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 self-start">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-surface">
        <Container>
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with"
            className="mb-16"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skills.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="tech"
                          className="hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}