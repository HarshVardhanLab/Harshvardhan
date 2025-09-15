import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { Container } from "@/components/common/Container";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/projects" replace />;
  }

  const project = getProjectBySlug(slug);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find previous and next projects
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-16">
      {/* Back Button */}
      <section className="py-8 bg-background border-b border-border">
        <Container>
          <Button asChild variant="ghost" className="group">
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
              Back to Projects
            </Link>
          </Button>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge variant="category">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {project.role}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.github && (
                  <Button asChild variant="outline" size="lg">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button asChild variant="hero" size="lg">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-hard">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-medium">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Role</h4>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Date</h4>
                    <p>{new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Category</h4>
                    <p>{project.category}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.github && (
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-surface border-t border-border">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {previousProject ? (
              <Button asChild variant="ghost" className="group">
                <Link to={`/projects/${previousProject.slug}`} className="flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Previous Project</p>
                    <p className="font-medium">{previousProject.title}</p>
                  </div>
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextProject && (
              <Button asChild variant="ghost" className="group">
                <Link to={`/projects/${nextProject.slug}`} className="flex items-center">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next Project</p>
                    <p className="font-medium">{nextProject.title}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-[2px] transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}