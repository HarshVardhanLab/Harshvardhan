import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people.
              Let's build something great together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Index;